import { NextResponse } from 'next/server';
import sslChecker from 'ssl-checker';

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Ensure valid URL
        let targetHost;
        try {
            const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
            targetHost = urlObj.hostname;
        } catch (e) {
            return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
        }

        // 1. SSL Check
        let sslData = null;
        let sslStatus = 'Unknown';
        try {
            const sslResult = await sslChecker(targetHost);
            sslData = sslResult;
            sslStatus = sslResult.valid ? 'Valid' : 'Invalid';
        } catch (e) {
            sslStatus = 'No SSL / Error';
        }

        // 2. Heuristic Analysis
        const heuristics = [];
        let riskScore = 0;

        // Check for IP address usage directly
        if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(targetHost)) {
            heuristics.push('Uses direct IP address (Suspicious)');
            riskScore += 50;
        }

        // Check length
        if (targetHost.length > 50) {
            heuristics.push('Unusually long domain name');
            riskScore += 20;
        }

        // Check for suspicious keywords in subdomain
        const suspiciousKeywords = ['verify', 'account', 'banking', 'secure', 'login', 'update'];
        if (suspiciousKeywords.some(w => targetHost.includes(w)) && !targetHost.includes('google.com') && !targetHost.includes('microsoft.com')) {
            heuristics.push('Contains sensitive keywords in domain (Possible Social Engineering)');
            riskScore += 30;
        }

        // Determine Verdict
        if (sslStatus !== 'Valid' && sslStatus !== 'Unknown') riskScore += 40;

        const verdict = riskScore > 60 ? 'High Risk' : riskScore > 20 ? 'Caution' : 'Safe';

        return NextResponse.json({
            host: targetHost,
            ssl: {
                status: sslStatus,
                issuer: (sslData as any)?.issuer?.O || 'N/A',
                daysRemaining: sslData?.daysRemaining || 0
            },
            heuristics,
            riskScore,
            verdict
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
    }
}
