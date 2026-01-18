"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
    {
        name: "Dr. Sarah Chen",
        role: "Founder & CEO",
        bio: "Former NSA Lead Researcher. 15+ years of experience in AI-driven cryptography and zero-trust architectures.",
        initials: "SC",
        color: "bg-primary/20 text-primary",
    },
    {
        name: "Marcus Reynolds",
        role: "Chief Security Officer",
        bio: "Ex-Red Team Lead at major tech giants. Specializes in preventing zero-day exploits and advanced persistent threats.",
        initials: "MR",
        color: "bg-accent/20 text-accent",
    },
    {
        name: "Elena Rodriguez",
        role: "VP of Engineering",
        bio: "Architect of Nexera's core Neural Defense Engine. Expert in scaling distributed systems to billions of requests.",
        initials: "ER",
        color: "bg-blue-500/20 text-blue-500",
    },
    {
        name: "David Kim",
        role: "Lead Threat Analyst",
        bio: "Ensures our AI models stay ahead of emerging global threat vectors through 24/7 dark web monitoring.",
        initials: "DK",
        color: "bg-green-500/20 text-green-500",
    },
]

export default function Team() {
    return (
        <section id="team" className="py-24 bg-muted/10">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                        Our Experts
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Built by Security Veterans
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        We combine decades of experience in offensive and defensive security with cutting-edge AI research.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center text-center space-y-4 rounded-xl p-6 hover:bg-muted/50 transition-colors"
                        >
                            {/* Avatar Placeholder */}
                            <div className={`relative h-32 w-32 rounded-full overflow-hidden flex items-center justify-center text-3xl font-bold ${member.color} mb-2 ring-4 ring-background shadow-xl`}>
                                {member.initials}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm font-medium text-primary">{member.role}</p>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {member.bio}
                            </p>

                            <div className="flex items-center gap-3 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-blue-600">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-sky-500">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-foreground">
                                    <Github className="h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
