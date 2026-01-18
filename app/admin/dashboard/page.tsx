"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, ShieldAlert, Server, Activity, Search, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockUsers = [
    { id: 1, name: "Alice Freeman", company: "TechCorp", status: "Active", plan: "Enterprise", lastActive: "2 mins ago" },
    { id: 2, name: "Bob Smith", company: "DevStudio", status: "Active", plan: "Pro", lastActive: "1 hour ago" },
    { id: 3, name: "Charlie Davis", company: "FinanceFlow", status: "Warning", plan: "Enterprise", lastActive: "1 day ago" },
    { id: 4, name: "Diana Prince", company: "SecurityInc", status: "Inactive", plan: "Basic", lastActive: "5 days ago" },
    { id: 5, name: "Evan Wright", company: "LogiTech", status: "Active", plan: "Pro", lastActive: "10 mins ago" },
]

export default function AdminDashboard() {
    const [users, setUsers] = useState(mockUsers)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const deleteUser = (id: number) => {
        setUsers(users.filter(u => u.id !== id))
    }

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-6">
            <header className="flex justify-between items-center mb-8 pb-4 border-b border-green-900">
                <div className="flex items-center gap-2">
                    <Server className="h-6 w-6" />
                    <h1 className="text-xl font-bold tracking-widest uppercase">NEXERA ADMIN CONSOLE</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        UPLINK ESTABLISHED
                    </div>
                    <Link href="/">
                        <Button variant="outline" size="sm" className="border-green-800 text-green-500 hover:bg-green-900 h-8">LOGOUT</Button>
                    </Link>
                </div>
            </header>

            {/* Admin Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                    { label: "TOTAL CLIENTS", value: users.length, icon: Users },
                    { label: "ACTIVE SCANS", value: "124", icon: Activity },
                    { label: "THREATS BLOCKED", value: "9,240", icon: ShieldAlert },
                    { label: "SERVER LOAD", value: "34%", icon: Server },
                ].map((stat, i) => (
                    <div key={i} className="bg-green-950/20 border border-green-900 p-4">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-green-700">{stat.label}</span>
                            <stat.icon className="h-4 w-4 text-green-700" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* User Management Table */}
            <div className="border border-green-900 bg-green-950/10">
                <div className="p-4 border-b border-green-900 flex justify-between items-center">
                    <h2 className="text-lg font-bold">CLIENT DATABASE</h2>
                    <div className="relative w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-green-700" />
                        <Input
                            placeholder="SEARCH DATABASE..."
                            className="pl-8 bg-black border-green-900 text-green-500 h-9 font-mono focus-visible:ring-green-700 placeholder:text-green-900"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-green-900/20 text-green-700 uppercase text-xs">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Client Name</th>
                                <th className="px-4 py-3">Company</th>
                                <th className="px-4 py-3">Plan</th>
                                <th className="px-4 py-3">Network Status</th>
                                <th className="px-4 py-3">Last Active</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-green-900/50">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-green-900/10 transition-colors group">
                                    <td className="px-4 py-3 text-green-700">#{user.id.toString().padStart(4, '0')}</td>
                                    <td className="px-4 py-3 font-bold">{user.name}</td>
                                    <td className="px-4 py-3">{user.company}</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2 py-0.5 rounded border border-green-900 bg-green-950 text-xs">
                                            {user.plan}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`flex items-center gap-2 ${user.status === 'Warning' ? 'text-yellow-500' : 'text-green-500'}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${user.status === 'Inactive' ? 'bg-gray-500' : user.status === 'Warning' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-green-700">{user.lastActive}</td>
                                    <td className="px-4 py-3 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-green-700 hover:text-green-500 hover:bg-green-900/20">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="bg-black border-green-900 text-green-500 font-mono">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem className="focus:bg-green-900/20 focus:text-green-400 cursor-pointer">View Details</DropdownMenuItem>
                                                <DropdownMenuItem className="focus:bg-green-900/20 focus:text-green-400 cursor-pointer">Suspend Access</DropdownMenuItem>
                                                <DropdownMenuSeparator className="bg-green-900" />
                                                <DropdownMenuItem
                                                    className="text-red-500 focus:bg-red-900/20 focus:text-red-400 cursor-pointer"
                                                    onClick={() => deleteUser(user.id)}
                                                >
                                                    <Trash2 className="mr-2 h-4 w-4" /> Terminate
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
