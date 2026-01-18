"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    Shield,
    LayoutDashboard,
    ScanEye,
    Globe,
    MailWarning,
    Users,
    Settings,
    LogOut,
    Bell,
    Menu,
    X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: ScanEye, label: "Vulnerability Scanner", href: "/dashboard/scanner" },
    { icon: Globe, label: "Threat Map", href: "/dashboard/threat-map" },
    { icon: MailWarning, label: "Phishing Guard", href: "/dashboard/phishing" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-muted/10 flex">
            <Toaster position="top-right" />

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Navigation */}
            <motion.aside
                className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-background border-r flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                <div className="p-6 border-b flex justify-between items-center">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <Shield className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold font-mono">NE&lt;/&gt;ERA</span>
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden">
                        <X className="h-5 w-5 text-muted-foreground" />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                        Platform
                    </div>
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link key={item.href} href={item.href}>
                                <span className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}>
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t space-y-2">
                    <Link href="/login">
                        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10">
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign Out
                        </Button>
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-16 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-30 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </button>
                        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            System Operational
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-background" />
                        </Button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
                            TC
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
