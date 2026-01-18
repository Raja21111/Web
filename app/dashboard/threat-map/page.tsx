"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Globe, RefreshCw, AlertOctagon } from "lucide-react"
import axios from 'axios'
import { Button } from "@/components/ui/button"

export default function ThreatMapPage() {
    const [threats, setThreats] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const fetchThreats = async () => {
        setLoading(true)
        try {
            const res = await axios.get('/api/threats')
            setThreats(res.data.data || [])
        } catch (e) {
            console.error("Failed to fetch feed")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchThreats()
    }, [])

    return (
        <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Active Botnet Feed</h1>
                    <p className="text-muted-foreground">Live C2 (Command & Control) servers detected by global sensors.</p>
                </div>
                <Button onClick={fetchThreats} disabled={loading} variant="outline" size="sm">
                    <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} /> Refresh Feed
                </Button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-0">
                {/* List View of Real Threats */}
                <div className="bg-card border rounded-xl overflow-hidden flex flex-col shadow-sm">
                    <div className="p-4 border-b bg-muted/30 font-medium text-sm flex justify-between">
                        <span>Active Threats ({threats.length})</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            Source: Feodo Tracker
                        </span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-0">
                        {loading ? (
                            <div className="p-8 text-center text-sm text-muted-foreground">Acquiring global telemetry...</div>
                        ) : (
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted/10 text-xs text-muted-foreground sticky top-0 bg-background">
                                    <tr>
                                        <th className="px-4 py-2">Malware</th>
                                        <th className="px-4 py-2">IP:Port</th>
                                        <th className="px-4 py-2">Country</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {threats.map((t, i) => (
                                        <tr key={i} className="hover:bg-muted/20">
                                            <td className="px-4 py-3 font-medium text-red-500">{t.malware}</td>
                                            <td className="px-4 py-3 font-mono text-xs">{t.ip}:{t.port}</td>
                                            <td className="px-4 py-3 text-muted-foreground">{t.country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                {/* Visualization (Abstract) */}
                <div className="md:col-span-2 bg-black rounded-xl border relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    <div className="relative">
                        <Globe className="h-64 w-64 text-primary/10 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-mono text-primary/50">GLOBAL SENSORS ACTIVE</span>
                        </div>
                    </div>

                    {/* Animated Pings for Real Data */}
                    {!loading && threats.slice(0, 15).map((t, i) => (
                        <ThreatPing key={i} index={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ThreatPing({ index }: { index: number }) {
    const top = 10 + Math.random() * 80 + "%"
    const left = 10 + Math.random() * 80 + "%"
    const duration = 2 + Math.random() * 3

    return (
        <motion.div
            className="absolute h-3 w-3 bg-red-500/50 rounded-full"
            style={{ top, left }}
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration, repeat: Infinity }}
        >
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
        </motion.div>
    )
}
