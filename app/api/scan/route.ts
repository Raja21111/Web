import { NextResponse } from 'next/server';
import net from 'net';

export async function POST(req: Request) {
    try {
        const { target } = await req.json();

        if (!target) {
            return NextResponse.json({ error: 'Target is required' }, { status: 400 });
        }

        // Sanitize target (basic check to remove http/https)
        const host = target.replace(/^https?:\/\//, '').split('/')[0];

        const commonPorts = [
            { port: 21, service: 'FTP' },
            { port: 22, service: 'SSH' },
            { port: 25, service: 'SMTP' },
            { port: 53, service: 'DNS' },
            { port: 80, service: 'HTTP' },
            { port: 443, service: 'HTTPS' },
            { port: 3306, service: 'MySQL' },
            { port: 8080, service: 'HTTP-Alt' },
        ];

        const results: any[] = [];

        // Helper to check a single port
        const checkPort = (port: number, service: string) => {
            return new Promise((resolve) => {
                const socket = new net.Socket();

                socket.setTimeout(2000); // 2s timeout

                socket.on('connect', () => {
                    results.push({ port, service, status: 'Open' });
                    socket.destroy();
                    resolve(true);
                });

                socket.on('timeout', () => {
                    socket.destroy();
                    resolve(false);
                });

                socket.on('error', (err) => {
                    socket.destroy();
                    resolve(false);
                });

                socket.connect(port, host);
            });
        };

        // Run checks in parallel
        await Promise.all(commonPorts.map(p => checkPort(p.port, p.service)));

        return NextResponse.json({
            target: host,
            results: results.sort((a: any, b: any) => a.port - b.port)
        });

    } catch (error) {
        return NextResponse.json({ error: 'Scan failed' }, { status: 500 });
    }
}
