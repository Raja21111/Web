"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Bell, Shield, User } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account preferences and security configuration.</p>
            </div>

            <div className="space-y-6">
                <div className="bg-card rounded-xl border p-6 space-y-6">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                        <User className="h-5 w-5" /> Profile Settings
                    </h3>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Company Name</Label>
                            <Input id="name" defaultValue="Acme Corp" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Admin Email</Label>
                            <Input id="email" defaultValue="admin@acme.com" />
                        </div>
                    </div>
                    <Button>Save Changes</Button>
                </div>

                <div className="bg-card rounded-xl border p-6 space-y-6">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                        <Bell className="h-5 w-5" /> Notifications
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Critical Alerts</Label>
                                <p className="text-sm text-muted-foreground">Receive immediate emails for high-risk threats.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Weekly Reports</Label>
                                <p className="text-sm text-muted-foreground">Receive summary of system performance.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Marketing Emails</Label>
                                <p className="text-sm text-muted-foreground">Receive product updates and offers.</p>
                            </div>
                            <Switch />
                        </div>
                    </div>
                </div>

                <div className="bg-card rounded-xl border p-6 space-y-6">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                        <Shield className="h-5 w-5" /> API Access
                    </h3>
                    <div className="space-y-2">
                        <Label>API Key</Label>
                        <div className="flex gap-2">
                            <Input readOnly value="sk_live_51M0...92kd" className="font-mono bg-muted" />
                            <Button variant="outline">Regenerate</Button>
                        </div>
                        <p className="text-xs text-muted-foreground">Used for integrating with your custom stack.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
