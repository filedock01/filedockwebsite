
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, ShieldCheck, Zap, Cloud, Play, ChevronRight, BarChart3, Users, UploadCloud, Bell } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
    return (
        <section className="relative pt-10 pb-12 lg:pt-10 lg:pb-24 overflow-hidden bg-background min-h-[90vh] flex items-center">
            {/* Spotlight Effect */}
            <div className="absolute top-0 right-0 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-brand-50/40 rounded-full blur-[80px] lg:blur-[120px] -z-10 pointer-events-none opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-secondary/30 rounded-full blur-[80px] lg:blur-[100px] -z-10 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 h-full max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-2 items-center h-full">

                    {/* Left Column: Content (Takes 7 cols) */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0 order-1">
                        {/* Announcement Pill */}
                        <div className="inline-flex items-center gap-2 mb-6 lg:mb-8 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                            <Badge variant="secondary" className="px-3 py-1 rounded-full text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-100 transition-colors cursor-pointer">
                                <span className="mr-2 px-1.5 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold">NEW</span>
                                Mobile Ecosystem 2.0
                                <ChevronRight className="w-3 h-3 ml-1" />
                            </Badge>
                        </div>

                        {/* Main Typography */}
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 lg:mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                            Video <span>Management,</span><br /> Perfected for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-teal-400"> Mobile.</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                            A dual-app ecosystem designed for <span className="text-foreground font-medium">Speed</span> and <span className="text-foreground font-medium">Security</span>. Give users a premium streaming experience, while you keep total control.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up w-full sm:w-auto px-4 sm:px-0 mb-10" style={{ animationDelay: "300ms" }}>
                            <Link href="#download" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 lg:h-14 text-base lg:text-lg shadow-2xl shadow-brand-500/20 bg-brand-600 hover:bg-brand-700 hover:scale-105 transition-all">
                                    Get the Apps <Smartphone className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="#features" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 lg:h-14 text-base lg:text-lg border-2 hover:bg-secondary/50 hover:text-foreground">
                                    How It Works <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                    <ShieldCheck className="w-3 h-3" />
                                </div>
                                <span className="font-medium">Bank-Grade Encryption</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-600">
                                    <Zap className="w-3 h-3" />
                                </div>
                                <span className="font-medium">99.9% Uptime SLA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                                    <Cloud className="w-3 h-3" />
                                </div>
                                <span className="font-medium">Unlimited Bandwidth</span>
                            </div>
                        </div>        </div>
                    {/* Right Column: Dual Phone Visual (Takes 5 cols) */}
                    {/* Fix: Changed justify-end to justify-center to fix overflow and reduce gap */}
                    <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex justify-center items-center lg:items-end animate-fade-in-up perspective-1000 mt-8 lg:mt-0 order-2" style={{ animationDelay: "500ms" }}>

                        {/* Scaling container */}
                        {/* Fix: Changed origin to center to prevent cut-off on rotation */}
                        <div className="relative w-[300px] md:w-[400px] h-full transform scale-75 sm:scale-90 md:scale-100 origin-center transition-transform">

                            {/* Phone 1: Admin App (Left, Behind, Darker) */}
                            <div className="absolute top-4 sm:top-10 left-0 w-[220px] md:w-[260px] h-[440px] md:h-[520px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 z-10 overflow-hidden ring-1 ring-white/20 origin-bottom-right group">
                                {/* Internal UI - Admin */}
                                <div className="w-full h-full bg-slate-900 relative flex flex-col">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-lg z-20" />

                                    {/* Admin Header */}
                                    <div className="pt-8 px-4 pb-4 flex justify-between items-center bg-slate-900 border-b border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center">
                                                <ShieldCheck className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-white font-bold text-xs tracking-wide">ADMIN CONSOLE</span>
                                        </div>
                                        <div className="relative">
                                            <Bell className="w-4 h-4 text-slate-400" />
                                            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-slate-900" />
                                        </div>
                                    </div>

                                    {/* Admin Stats Grid */}
                                    <div className="p-4 space-y-4 flex-1 overflow-hidden">
                                        {/* Status Cards */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 flex flex-col gap-2 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
                                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300" />
                                                <div className="flex justify-between items-start">
                                                    <div className="text-[10px] text-slate-400 font-medium">System Status</div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                </div>
                                                <div className="text-sm font-bold text-white">Online</div>
                                                <div className="text-[9px] text-emerald-400">99.9% Uptime</div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 flex flex-col gap-2 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
                                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                                                <div className="text-[10px] text-slate-400 font-medium">Active Users</div>
                                                <div className="text-sm font-bold text-white">1,248</div>
                                                <div className="text-[9px] text-indigo-300">+24 this hour</div>
                                            </div>
                                        </div>

                                        {/* Server Load Widget */}
                                        <div className="p-4 rounded-xl bg-slate-800/80 border border-white/5 space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[11px] font-medium text-slate-300">Server Load</span>
                                                <span className="text-[10px] text-slate-400">42%</span>
                                            </div>
                                            <div className="flex items-end gap-1 h-8">
                                                {[30, 50, 45, 60, 40, 75, 55, 45, 30].map((h, i) => (
                                                    <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-sm ${i === 5 ? 'bg-indigo-500' : 'bg-slate-700'}`} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Recent Activity List */}
                                        <div className="space-y-2">
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Recent Logs</div>
                                            {[
                                                { user: 'Sarah K.', action: 'Uploaded file', time: '2m', color: 'text-emerald-400' },
                                                { user: 'Mike R.', action: 'Access denied', time: '5m', color: 'text-red-400' },
                                                { user: 'System', action: 'Backup done', time: '1h', color: 'text-blue-400' },
                                            ].map((log, i) => (
                                                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/30 border border-white/5">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${log.action.includes('denied') ? 'bg-red-500' : 'bg-indigo-500'}`} />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-[11px] font-medium text-slate-200 truncate">{log.user}</div>
                                                        <div className={`text-[9px] ${log.color}`}>{log.action}</div>
                                                    </div>
                                                    <div className="text-[9px] text-slate-500">{log.time}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone 2: User App (Right, Front, Brighter) */}
                            <div className="absolute bottom-0 right-0 w-[230px] md:w-[270px] h-[460px] md:h-[540px] bg-black rounded-[2.5rem] border-[6px] border-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transform rotate-6 hover:rotate-2 transition-transform duration-500 z-20 overflow-hidden ring-1 ring-gray-800">
                                {/* Internal UI - User */}
                                <div className="w-full h-full bg-white relative flex flex-col">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-lg z-20" />

                                    {/* App Bar */}
                                    <div className="pt-10 px-5 pb-4 flex justify-between items-center">
                                        <div>
                                            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wide">My Cloud</h2>
                                            <h1 className="text-xl font-bold text-slate-900 mt-0.5">Files</h1>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center">
                                            <Users className="w-4 h-4 text-brand-600" />
                                        </div>
                                    </div>

                                    {/* Search Bar Visual */}
                                    <div className="px-5 mb-4">
                                        <div className="w-full h-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center px-3 gap-2">
                                            <div className="w-3 h-3 rounded-full border border-slate-300" />
                                            <div className="w-20 h-1.5 bg-slate-200 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Storage Card */}
                                    <div className="px-5 mb-6">
                                        <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-200">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                                    <Cloud className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-[10px] font-medium bg-white/20 px-2 py-0.5 rounded-full">Pro</span>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-2xl font-bold">64<span className="text-sm font-normal text-slate-400">GB</span></div>
                                                <div className="text-[10px] text-slate-400">Used of 100GB</div>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                                                <div className="w-[64%] h-full bg-brand-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recent Files List */}
                                    <div className="flex-1 bg-slate-50 rounded-t-[2rem] p-5 space-y-4">
                                        <div className="flex justify-between items-end px-1">
                                            <span className="text-xs font-bold text-slate-900">Recent Uploads</span>
                                            <span className="text-[10px] text-brand-600 font-medium">View All</span>
                                        </div>
                                        {[
                                            { name: 'Project_Alpha_v2.mp4', size: '2.4 GB', icon: Play, color: 'text-purple-500', bg: 'bg-purple-100' },
                                            { name: 'Q3_Financials.pdf', size: '4.2 MB', icon: BarChart3, color: 'text-blue-500', bg: 'bg-blue-100' },
                                            { name: 'Site_Assets.zip', size: '156 MB', icon: Cloud, color: 'text-orange-500', bg: 'bg-orange-100' },
                                        ].map((file, i) => (
                                            <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-pointer group/item">
                                                <div className={`w-10 h-10 rounded-lg ${file.bg} flex items-center justify-center`}>
                                                    <file.icon className={`w-5 h-5 ${file.color}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs font-bold text-slate-700 truncate group-hover/item:text-brand-600 transition-colors">{file.name}</div>
                                                    <div className="text-[10px] text-slate-400">{file.size} • Just now</div>
                                                </div>
                                                <div className="text-slate-300">
                                                    <ChevronRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom Nav Mockup */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-slate-900 rounded-full opacity-20" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
