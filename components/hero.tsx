"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Lock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-accent/20 opacity-20 blur-[100px]" />
            </div>

            <div className="container relative z-10 flex flex-col items-center px-4 text-center md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6"
                >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    NEXERA v2.0 Live
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Next-Generation <br className="hidden sm:block" />
                    <span className="text-primary">AI-Powered Cybersecurity</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground md:text-xl"
                >
                    Automated protection. Intelligent defense. Zero hassle.
                    Secure your infrastructure with adaptive AI that evolves faster than the threats.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6"
                >
                    <Button size="xl" className="group text-lg">
                        Get Started Free
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="xl" variant="outline" className="text-lg backdrop-blur-sm bg-background/50">
                        Watch Demo
                    </Button>
                </motion.div>

                {/* Visual / Dashboard Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    className="relative mt-16 w-full max-w-5xl rounded-xl border bg-card/50 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-white/10"
                >
                    {/* Fake Dashboard Header */}
                    <div className="flex items-center gap-2 border-b p-3 bg-muted/20 rounded-t-lg">
                        <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="mx-auto rounded-md bg-muted/40 px-3 py-1 text-xs text-muted-foreground font-mono">
                            dashboard.nexera.ai
                        </div>
                    </div>

                    {/* Fake Dashboard Content */}
                    <div className="grid gap-6 p-6 sm:grid-cols-3 text-left">
                        <div className="rounded-lg border bg-background/50 p-4 space-y-2">
                            <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                            <div className="text-2xl font-bold">99.9%</div>
                            <div className="text-sm text-muted-foreground">Threats Neutralized</div>
                        </div>
                        <div className="rounded-lg border bg-background/50 p-4 space-y-2">
                            <Lock className="h-8 w-8 text-accent mb-2" />
                            <div className="text-2xl font-bold">Encrypted</div>
                            <div className="text-sm text-muted-foreground">End-to-End Security</div>
                        </div>
                        <div className="rounded-lg border bg-background/50 p-4 space-y-2">
                            <Globe className="h-8 w-8 text-blue-500 mb-2" />
                            <div className="text-2xl font-bold">Global</div>
                            <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
                        </div>

                        {/* Graph Placeholder */}
                        <div className="col-span-3 h-48 rounded-lg border bg-muted/10 relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-8 gap-2">
                            {[40, 60, 45, 70, 55, 80, 75, 90, 85, 95, 80, 100].map((h, i) => (
                                <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.8 + (i * 0.05) }}
                                        className="absolute bottom-0 w-full bg-gradient-to-t from-primary/50 to-primary rounded-t-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50"
            >
                <div className="h-10 w-6 rounded-full border-2 border-current flex justify-center pt-2">
                    <div className="h-1.5 w-1 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}
