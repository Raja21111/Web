"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AlertTriangle, Lock, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SecureAdminLogin() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate Admin API call
        setTimeout(() => {
            setIsLoading(false)
            router.push("/admin/dashboard")
        }, 2000)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-green-500 font-mono">
            <div className="w-full max-w-md p-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border border-green-900 bg-green-950/10 p-8 rounded-sm shadow-[0_0_50px_rgba(0,255,0,0.1)]"
                >
                    <div className="mb-8 flex items-center gap-4 border-b border-green-900 pb-4">
                        <Terminal className="h-6 w-6" />
                        <h1 className="text-lg font-bold tracking-widest uppercase">Nexera System Root</h1>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="id" className="text-xs uppercase tracking-widest text-green-700">Admin Identifier</Label>
                            <Input
                                id="id"
                                type="text"
                                className="bg-black border-green-900 text-green-500 focus-visible:ring-green-700 h-10 font-mono placeholder:text-green-900"
                                placeholder="ROOT_ACCESS_ID"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="key" className="text-xs uppercase tracking-widest text-green-700">Access Key</Label>
                            <Input
                                id="key"
                                type="password"
                                className="bg-black border-green-900 text-green-500 focus-visible:ring-green-700 h-10 font-mono"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-green-900/20 text-green-500 border border-green-800 hover:bg-green-500 hover:text-black transition-all rounded-none"
                            disabled={isLoading}
                        >
                            {isLoading ? "ESTABLISHING UPLINK..." : "INITIATE SESSION"}
                        </Button>
                    </form>

                    <div className="mt-6 flex items-start gap-2 text-[10px] text-green-800 uppercase leading-relaxed">
                        <AlertTriangle className="h-3 w-3 shrink-0" />
                        Warning: Unauthorized access attempts are monitored and will be reported to federal authorities under the Computer Fraud and Abuse Act.
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
