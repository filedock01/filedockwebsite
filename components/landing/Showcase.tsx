
import { ShieldCheck, UserCheck, Cloud, Wifi, Lock, Zap, Play, CheckCircle2, ChevronRight, MoreVertical, LayoutDashboard, Smartphone, Download, BarChart3, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Showcase() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="ecosystem">
            <div className="container px-4 mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-24 animate-fade-in-up">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-brand-200 text-brand-700 bg-brand-50/50">
                        The Ecosystem
                    </Badge>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                        Two Apps. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-teal-400">One Seamless Flow.</span>
                    </h2>
                    <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Split the complexity. Admins get raw power; Users get pure simplicity.
                    </p>
                </div>

                <div className="space-y-32 relative">




                    {/* 1. User App Section (Text Left, Phone Right) */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">

                        {/* Text Content - Wider (approx 60%) */}
                        <div className="lg:w-[65%] flex-1 order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                            <div className="flex items-center gap-3 text-brand-600 mb-6">
                                <div className="p-2 rounded-lg bg-brand-50 border border-brand-100"><Smartphone className="w-5 h-5" /></div>
                                <span className="font-bold text-sm tracking-wide uppercase">User App</span>
                            </div>

                            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Immersive Viewing</h3>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Give your team a distraction-free environment. Content streams instantly or saves offline, keeping them focused on what matters.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { icon: Zap, title: "Zero-Buffer Streaming", desc: "Adaptive bitrate ensures smooth playback on any network." },
                                    { icon: Download, title: "Secure Offline Mode", desc: "Download encrypted files that only play inside the app." },
                                    { icon: Lock, title: "Anti-Piracy Protection", desc: "Screen recording and screenshots are completely blocked." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-brand-100 hover:bg-brand-50/30 transition-all duration-300 group/item cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover/item:bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0 transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Mockup - Narrower (approx 40%) */}
                        <div className="lg:w-[35%] flex-none order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                            {/* iPhone Frame */}
                            <div className="relative w-[300px] h-[580px] bg-black rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-200 transform lg:rotate-[3deg] lg:-translate-x-8 hover:scale-[1.02] transition-all duration-500">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/20 rounded-full blur-[80px] pointer-events-none" />

                                <div className="h-full bg-white relative z-10 flex flex-col">
                                    {/* Dynamic Island / Notch */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-blue-900/50 rounded-full" />
                                    </div>

                                    {/* App Header */}
                                    <div className="pt-14 px-6 pb-4 border-b border-gray-100 bg-white z-20">
                                        <div className="flex justify-between items-end">
                                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Discover</h2>
                                            <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center"><UserCheck className="w-5 h-5 text-slate-600" /></div>
                                        </div>
                                    </div>

                                    {/* Content Feed - Hidden Scrollbar */}
                                    <div className="flex-1 overflow-y-auto p-5 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        {/* Hero Video */}
                                        <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 relative group aspect-video bg-slate-900">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* Play Button */}
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white pl-1 shadow-lg border border-white/30">
                                                    <Play className="w-5 h-5 fill-current" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md">10:42</div>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="font-bold text-slate-900 text-lg leading-tight">Q4 All Hands Meeting</h3>
                                            <p className="text-slate-500 text-xs">Streamed live 2 hours ago • Executive Update</p>
                                        </div>

                                        {/* Horizontal List */}
                                        <div>
                                            <div className="flex justify-between items-center mb-3">
                                                <h4 className="font-bold text-slate-900 text-sm">Continue Watching</h4>
                                                <ChevronRight className="w-4 h-4 text-slate-400" />
                                            </div>
                                            <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 no-scrollbar">
                                                {[1, 2].map(i => (
                                                    <div key={i} className="min-w-[140px] rounded-xl overflow-hidden border border-gray-100 shrink-0 bg-slate-50/50">
                                                        <div className="h-20 bg-slate-200 relative overflow-hidden">
                                                            <div className="absolute bottom-0 left-0 h-1 bg-brand-500 w-1/2" />
                                                        </div>
                                                        <div className="p-2 space-y-1.5">
                                                            <div className="h-3 bg-slate-200 rounded w-3/4" />
                                                            <div className="h-2 bg-slate-100 rounded w-1/2" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav / Home Indicator */}
                                    <div className="h-16 bg-white border-t border-gray-100 flex items-center justify-around text-[10px] font-bold text-gray-400 pb-2">
                                        <div className="flex flex-col items-center gap-1 text-brand-600"><Play className="w-5 h-5 fill-current" /> WATCH</div>
                                        <div className="flex flex-col items-center gap-1 hover:text-slate-600"><Download className="w-5 h-5" /> OFFLINE</div>
                                        <div className="flex flex-col items-center gap-1 hover:text-slate-600"><MoreVertical className="w-5 h-5" /> MORE</div>
                                    </div>

                                    {/* Home Indicator */}
                                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full z-30" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Admin App Section (Text Right, Phone Left) */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">


                        {/* Visual Mockup - Narrower (approx 40%) */}
                        <div className="lg:w-[35%] flex-none flex justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                            {/* iPhone Frame */}
                            <div className="relative w-[300px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-800 transform lg:rotate-[-3deg] lg:translate-x-8 hover:scale-[1.02] transition-all duration-500">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                                <div className="h-full bg-slate-950 text-white relative z-10 flex flex-col">
                                    {/* Dynamic Island / Notch */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 ring-1 ring-slate-800 flex items-center justify-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-indigo-500/50 rounded-full" />
                                    </div>

                                    {/* App Header */}
                                    <div className="pt-14 px-6 mb-6 flex justify-between items-center">
                                        <div>
                                            <div className="text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-1">Total Control</div>
                                            <div className="text-2xl font-bold">Dashboard</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-indigo-400" /></div>
                                    </div>

                                    {/* Content Scroll - Hidden Scrollbar */}
                                    <div className="flex-1 overflow-y-auto px-6 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                        {/* Stats Card */}
                                        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 shadow-lg shadow-indigo-900/20 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10"><Cloud className="w-24 h-24" /></div>

                                            <div className="flex items-start justify-between mb-2 relative z-10">
                                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md"><Cloud className="w-5 h-5 text-white" /></div>
                                                <span className="bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md border border-white/10">PRO PLAN</span>
                                            </div>
                                            <div className="text-4xl font-bold mb-1 relative z-10">85%</div>
                                            <div className="text-indigo-100 text-xs font-medium mb-4 relative z-10">Storage Used • 1.2TB Left</div>
                                            <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden relative z-10">
                                                <div className="w-[85%] h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                            </div>
                                        </div>

                                        {/* Quick Actions Grid */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { label: "Add User", icon: Users },
                                                { label: "Upload", icon: Cloud },
                                            ].map((action, i) => (
                                                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors flex flex-col items-center gap-2 group cursor-pointer">
                                                    <action.icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                                                    <span className="text-xs font-bold text-slate-400">{action.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Recent Activity */}
                                        <div className="space-y-3">
                                            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Recent</div>
                                            {[1, 2].map((_, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800/50">
                                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                                        <Play className="w-4 h-4 fill-current" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium truncate">Quarterly_Review.mp4</div>
                                                        <div className="text-[10px] text-slate-500">1.2 GB • 2m ago</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Home Indicator */}
                                    <div className="h-6 w-full flex justify-center items-center">
                                        <div className="w-32 h-1 bg-slate-800 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content - Wider (approx 60%) */}
                        <div className="lg:w-[65%] flex-1 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                            <div className="flex items-center gap-3 text-indigo-600 mb-6">
                                <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100"><LayoutDashboard className="w-5 h-5" /></div>
                                <span className="font-bold text-sm tracking-wide uppercase">Admin App</span>
                            </div>

                            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Total Control Center</h3>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Upload terabytes of content, manage thousands of users, and track detailed analytics—all from a dedicated mobile interface.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { icon: Cloud, title: "Bulk Cloud Uploads", desc: "Upload in background without keeping app open." },
                                    { icon: ShieldCheck, title: "Granular Permissions", desc: "Set expiry dates, view limits, and access rules." },
                                    { icon: Users, title: "User Management", desc: "Approve, block, or manage user requests instantly." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300 group/item cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover/item:bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
