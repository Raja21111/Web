"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 z-0" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-8 p-12 rounded-3xl border bg-background/50 backdrop-blur-xl shadow-2xl"
                >
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Ready to Secure Your Future?
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground text-xl">
                        Join 500+ enterprises deploying the world's most advanced autonomous defense system.
                        Deploy in minutes, protected forever.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="xl" className="text-lg px-8">
                            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="xl" variant="outline" className="text-lg px-8">
                            <Mail className="mr-2 h-5 w-5" /> Contact Sales
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4">
                        No credit card required for 14-day trial. SOC2 Compliant.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
