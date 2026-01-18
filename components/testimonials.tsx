"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
    {
        quote: "Nexera's AI detection caught a sophisticated ransomware attack that 3 other enterprise vendors missed. It paid for itself in a single afternoon.",
        author: "James Wilson",
        role: "CISO at TechFlow",
        rating: 5,
    },
    {
        quote: "Finally, a security dashboard that doesn't feel like a spreadsheet from 1999. The UX is incredible, and the autonomous remediation is pure magic.",
        author: "Maria Garcia",
        role: "CTO at FinScale",
        rating: 5,
    },
    {
        quote: "We reduced our SOC alert fatigue by 95%. My team can finally focus on strategic threats instead of drowning in false positives.",
        author: "Robert Chen",
        role: "VP of Security at HealthCore",
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        See how forward-thinking companies are securing their future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-between rounded-xl border bg-muted/20 p-8 hover:bg-muted/40 transition-colors"
                        >
                            <div className="mb-6">
                                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-lg italic leading-relaxed text-foreground/90">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.author}</h4>
                                    <p className="text-sm text-muted-foreground">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
