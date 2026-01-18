"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MailWarning, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Lock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import axios from 'axios'
import { Badge } from "@/components/ui/badge"

export default function PhishingPage() {
    const [url, setUrl] = useState("")
    const [isChecking, setIsChecking] = useState(false)
    const [data, setData] = useState<any>(null)

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!url) return

        setIsChecking(true)
        setData(null)

        try {
            const response = await axios.post('/api/analyze-url', { url })
            setData(response.data)
            if (response.data.verdict === 'Safe') {
                toast.success("Analysis Complete: Site appears safe")
            } else {
                toast.warning(`Analysis Complete: ${response.data.verdict}`)
            }
        } catch (error) {
            toast.error("Failed to analyze URL")
        } finally {
            setIsChecking(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Live URL Forensics</h1>
                <p className="text-muted-foreground">Perform real-time SSL and heuristic analysis on any URL.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Analysis Card */}
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                    <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Target Analyzer
                    </h2>

                    <form onSubmit={handleCheck} className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="https://suspicous-link.com"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="bg-muted/50"
                                />
                                <Button type="submit" disabled={isChecking}>
                                    {isChecking ? "Analyzing..." : "Check"}
                                </Button>
                            </div>
                        </div>
                    </form>

                    <div className="mt-8">
                        <AnimatePresence>
                            {data && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <div className={`p-4 rounded-lg border ${data.verdict === 'Safe' ? 'bg-green-500/10 border-green-500/20' :
                                            data.verdict === 'Caution' ? 'bg-yellow-500/10 border-yellow-500/20' :
                                                'bg-red-500/10 border-red-500/20'
                                        }`}>
                                        <h3 className="font-bold text-lg flex items-center gap-2">
                                            Verdict: {data.verdict}
                                            {data.verdict === 'Safe' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                            {data.verdict === 'High Risk' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                                        </h3>
                                        <p className="text-sm opacity-80 mt-1">Risk Score: {data.riskScore}/100</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded border">
                                            <div className="flex items-center gap-3">
                                                <Lock className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm font-medium">SSL Certificate</span>
                                            </div>
                                            <Badge variant={data.ssl.status === 'Valid' ? 'default' : 'destructive'}>
                                                {data.ssl.status}
                                            </Badge>
                                        </div>
                                        <div className="text-xs text-muted-foreground px-1">
                                            <p>Issuer: {data.ssl.issuer}</p>
                                            <p>Days Remaining: {data.ssl.daysRemaining}</p>
                                        </div>

                                        {data.heuristics.length > 0 && (
                                            <div className="bg-muted/30 p-3 rounded border">
                                                <h4 className="text-sm font-medium mb-2">Heuristic Flags</h4>
                                                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                                    {data.heuristics.map((h: string, i: number) => (
                                                        <li key={i} className="text-orange-500">{h}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Info Panel */}
                <div className="space-y-4">
                    <h3 className="font-medium text-muted-foreground uppercase text-xs tracking-wider">How it works</h3>
                    <div className="p-6 bg-muted/10 rounded-xl border text-sm space-y-4">
                        <p>
                            Nexera performs a real-time handshake with the target server to inspect its SSL/TLS certificate chain.
                        </p>
                        <p>
                            We also analyze the domain structure for entropy (randomness), known phishing keywords, and puntcode obfuscation.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline">SSL/TLS</Badge>
                            <Badge variant="outline">DNS Analysis</Badge>
                            <Badge variant="outline">Entropy Check</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
