import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
        // Fetch from Abuse.ch Feodo Tracker (Botnet C2 IPs)
        // Detailed output: https://feodotracker.abuse.ch/downloads/ipblocklist.json
        const response = await axios.get('https://feodotracker.abuse.ch/downloads/ipblocklist.json');

        // The feed returns an array of objects
        const threats = response.data.slice(0, 50).map((item: any) => ({
            ip: item.ip_address,
            malware: item.malware,
            port: item.port,
            country: item.country,
            status: item.status,
            timestamp: item.first_seen_utc
        }));

        return NextResponse.json({
            source: 'Abuse.ch Feodo Tracker',
            count: threats.length,
            data: threats
        });

    } catch (error) {
        // Fallback if feed is down
        return NextResponse.json({
            source: 'Simulated (Feed Down)',
            count: 0,
            data: []
        }); // Handle gracefully on frontend
    }
}
