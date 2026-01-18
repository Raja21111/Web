"use client"

import { motion } from "framer-motion"
import { Activity, ShieldCheck, AlertTriangle, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', threats: 12 },
    { name: 'Tue', threats: 19 },
    { name: 'Wed', threats: 8 },
    { name: 'Thu', threats: 24 },
    { name: 'Fri', threats: 15 },
    { name: 'Sat', threats: 5 },
    { name: 'Sun', threats: 9 },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Security Overview</h1>
                    <p className="text-muted-foreground">Real-time threat monitoring and system health.</p>
                </div>
                <div className="flex gap-2">
                    <Button>Run Quick Scan</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    title="Threat Level"
                    value="Low"
                    subtext="System secure"
                    icon={ShieldCheck}
                    color="text-green-500"
                    bg="bg-green-500/10"
                />
                <StatsCard
                    title="Active Exploits"
                    value="0"
                    subtext="No active breaches"
                    icon={Activity}
                    color="text-primary"
                    bg="bg-primary/10"
                />
                <StatsCard
                    title="Vulnerabilities"
                    value="3"
                    subtext="2 Low, 1 Medium"
                    icon={Bug}
                    color="text-orange-500"
                    bg="bg-orange-500/10"
                />
                <StatsCard
                    title="Phishing Attempts"
                    value="142"
                    subtext="Blocked this week"
                    icon={AlertTriangle}
                    color="text-red-500"
                    bg="bg-red-500/10"
                />
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-2 p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                >
                    <h3 className="text-lg font-semibold mb-6">Threat Traffic Analysis</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,100,100,0.1)" vertical={false} />
                                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Area type="monotone" dataKey="threats" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorThreats)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                >
                    <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Suspicious Login Attempt</p>
                                    <p className="text-xs text-muted-foreground">Blocked IP 192.168.1.{50 + i} from Russia</p>
                                </div>
                                <span className="text-xs text-muted-foreground ml-auto">2m</span>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">View All Logs</Button>
                </motion.div>
            </div>
        </div>
    )
}

function StatsCard({ title, value, subtext, icon: Icon, color, bg }: any) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm flex items-start justify-between"
        >
            <div>
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <h3 className="text-2xl font-bold mt-2">{value}</h3>
                <p className="text-xs text-muted-foreground mt-1">{subtext}</p>
            </div>
            <div className={`p-3 rounded-lg ${bg} ${color}`}>
                <Icon className="h-5 w-5" />
            </div>
        </motion.div>
    )
}
