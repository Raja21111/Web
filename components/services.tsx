"use client"

import { motion } from "framer-motion"
import {
    ScanEye,
    MailWarning,
    Globe,
    Bot,
    GraduationCap,
    MonitorCheck,
    CreditCard,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
    {
        icon: <ScanEye className="h-8 w-8 text-primary" />,
        title: "AI Vulnerability Scanner",
        description: "Continuous automated scanning to detect and patch vulnerabilities before hackers exploit them.",
    },
    {
        icon: <MailWarning className="h-8 w-8 text-accent" />,
        title: "Phishing & Email Security",
        description: "Advanced natural language processing to detect sophisticated spear-phishing and social engineering attacks.",
    },
    {
        icon: <Globe className="h-8 w-8 text-blue-500" />,
        title: "Real-time Threat Intelligence",
        description: "Global monitoring system that updates your defense parameters instantly based on worldwide threat data.",
    },
    {
        icon: <Bot className="h-8 w-8 text-green-500" />,
        title: "AI Incident Response",
        description: "Automated triage and response assistant that neutralizes low-level threats without human intervention.",
    },
    {
        icon: <GraduationCap className="h-8 w-8 text-yellow-500" />,
        title: "Security Awareness Training",
        description: "Interactive AI-driven modules to train your staff on the latest cybersecurity best practices.",
    },
    {
        icon: <MonitorCheck className="h-8 w-8 text-purple-500" />,
        title: "AI Endpoint Monitor",
        description: "Lightweight agents for all your devices that detect anomalous behavior and malware signatures.",
    },
    {
        icon: <CreditCard className="h-8 w-8 text-red-500" />,
        title: "Transaction Fraud Prevention",
        description: "Real-time analysis of transaction patterns to block fraudulent activities with zero false positives.",
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-background">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                        Our Expertise
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our AI-Powered Cybersecurity Services
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Comprehensive protection for every layer of your digital infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background border shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm flex-grow mb-4">
                                    {service.description}
                                </p>
                                <div className="pt-2 mt-auto">
                                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                        Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            {/* Hover Beam Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </motion.div>
                    ))}

                    {/* Call to action card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 p-6 text-center hover:bg-muted/50 transition-colors"
                    >
                        <h3 className="text-lg font-bold mb-2">Need a custom solution?</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            We build tailored security architectures for enterprise needs.
                        </p>
                        <Button variant="outline" className="w-full">
                            Contact Sales
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
