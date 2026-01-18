"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Shield, Lock, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            router.push("/dashboard")
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[100px]" />
            </div>

            <div className="w-full max-w-md p-8 relative z-10">
                <div className="mb-8 text-center flex flex-col items-center">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Shield className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-bold font-mono">NE&lt;/&gt;ERA</span>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Secure access to your threat dashboard</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-background/80 backdrop-blur-xl border rounded-2xl p-8 shadow-xl"
                >
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input id="email" type="email" placeholder="name@company.com" required className="h-11 bg-muted/50" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <Input id="password" type="password" required className="h-11 bg-muted/50" />
                        </div>

                        <Button type="submit" className="w-full h-11 text-base" disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Authenticating...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    Sign In <ArrowRight className="h-4 w-4" />
                                </div>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                        Don't have an account? <Link href="#" className="text-primary font-medium hover:underline">Contact Sales</Link>
                    </div>
                </motion.div>

                <div className="mt-8 flex justify-center gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> SOC2 Compliant
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Lock className="h-3.5 w-3.5 text-primary" /> End-to-End Encrypted
                    </div>
                </div>
            </div>
        </div>
    )
}
