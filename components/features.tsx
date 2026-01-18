"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Zap, ShieldCheck, Lock, Activity, Users, Server } from "lucide-react"

const features = [
    {
        icon: <Bot className="h-10 w-10 text-primary" />,
        title: "AI-First Automation",
        description: "Let AI handle 95% of your security workload. Our adaptive models learn your infrastructure's baseline and auto-remediate anomalies in milliseconds.",
    },
    {
        icon: <Activity className="h-10 w-10 text-accent" />,
        title: "Real-Time Intelligence",
        description: "Stay ahead of threats with live AI correlation. We analyze millions of signals globally to predict and block zero-day attacks before they strike.",
    },
    {
        icon: <Zap className="h-10 w-10 text-yellow-500" />,
        title: "Affordable & Scalable",
        description: "Enterprise-grade protection starting at $9/mo. Pay for what you use, scale infinitely without compromising performance or security depth.",
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
        title: "Zero Trust Built-in",
        description: "Defensive only. Privacy-first. Compliant. We assume breach and verify every request, ensuring your data remains yours, always.",
    },
]

const stats = [
    { label: "Faster Detection", value: "10x", icon: <Zap className="h-5 w-5 text-primary" /> },
    { label: "Uptime Guarantee", value: "99.9%", icon: <Server className="h-5 w-5 text-accent" /> },
    { label: "Protected Businesses", value: "500+", icon: <Users className="h-5 w-5 text-blue-500" /> },
]

export default function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section id="features" className="py-24 bg-muted/20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Why Choose <span className="relative">Nexera<span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></span></span>?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Traditional security tools are reactive. We are proactive, predictive, and powered by next-gen AI.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <div className="p-3 rounded-lg bg-background border shadow-sm group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/50 pt-16"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground font-medium uppercase text-sm tracking-wider">
                                {stat.icon}
                                {stat.label}
                            </div>
                            <div className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
