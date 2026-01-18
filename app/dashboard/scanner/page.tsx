"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Loader2, CheckCircle, AlertOctagon, Shield, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import axios from 'axios'

export default function ScannerPage() {
    const [target, setTarget] = useState("")
    const [isScanning, setIsScanning] = useState(false)
    const [results, setResults] = useState<any[]>([])
    const [hasScanned, setHasScanned] = useState(false)

    const startScan = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!target) {
            toast.error("Please enter a domain or IP")
            return
        }

        setIsScanning(true)
        setHasScanned(false)
        setResults([])

        try {
            const response = await axios.post('/api/scan', { target })
            setResults(response.data.results)
            setHasScanned(true)
            if (response.data.results.length > 0) {
                toast.warning(`Scan Complete: ${response.data.results.length} Open Ports Found`)
            } else {
                toast.success("Scan Complete: No Open Ports Found (Secure)")
            }
        } catch (error) {
            toast.error("Scan failed to connect to target")
        } finally {
            setIsScanning(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Real-Time Port Scanner</h1>
                <p className="text-muted-foreground">Scan any public IP or Domain for open ports (21-8080).</p>
            </div>

            <div className="p-8 rounded-xl border bg-card shadow-lg text-center py-12">
                <form onSubmit={startScan} className="max-w-md mx-auto space-y-4">
                    <div className="relative">
                        <Server className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="example.com or 8.8.8.8"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="pl-10 h-12 text-lg"
                        />
                    </div>
                    <Button size="lg" className="w-full h-12 text-lg" disabled={isScanning}>
                        {isScanning ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="h-5 w-5 animate-spin" /> Scanning Network...
                            </div>
                        ) : (
                            "Initate Active Scan"
                        )}
                    </Button>
                </form>
            </div>

            <AnimatePresence>
                {hasScanned && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border rounded-xl overflow-hidden bg-card"
                    >
                        <div className="bg-muted/50 p-4 border-b font-medium flex justify-between">
                            <span>Scan Results: {target}</span>
                            <span className={`${results.length > 0 ? "text-orange-500" : "text-green-500"} flex items-center gap-1 text-sm`}>
                                {results.length > 0 ? <AlertOctagon className="h-4 w-4" /> : <Shield className="h-4 w-4" />}
                                {results.length} Ports Open
                            </span>
                        </div>

                        {results.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-foreground">Target is Secure</h3>
                                <p>No common ports were found open.</p>
                            </div>
                        ) : (
                            <div className="divide-y">
                                {results.map((res: any, i: number) => (
                                    <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/20">
                                        <div className="flex gap-4 items-center">
                                            <div className="p-2 bg-blue-500/10 text-blue-500 rounded font-mono font-bold">
                                                {res.port}
                                            </div>
                                            <div>
                                                <h4 className="font-medium">{res.service} Service Detected</h4>
                                                <p className="text-sm text-green-500">Status: {res.status}</p>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="secondary">View Details</Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
