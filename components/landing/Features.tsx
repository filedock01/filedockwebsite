
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Zap, Share2, Shield, Smartphone, Sliders, FileText, Image as ImageIcon, Play, CheckCircle2, Cloud, Signal, Wifi, ChevronLeft, Battery } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Features() {
    return (
        <section id="features" className="py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-brand-200 text-brand-700 bg-white">
                        Why We Built This
                    </Badge>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-slate-900">
                        Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-teal-400">Mobile Features.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We stripped away the desktop clutter. FileDock is engineered purely for <span className="font-bold text-slate-900">speed</span>, <span className="font-bold text-slate-900">security</span>, and <span className="font-bold text-slate-900">mobile consumption</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

                    {/* Feature 1: Mobile Ecosystem (Large) */}
                    <div className="md:col-span-2 md:row-span-2 relative group rounded-[2.5rem] border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-500 overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50" />

                        <div className="p-10 relative z-10 flex flex-col h-full">
                            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-600 group-hover:text-white shadow-sm ring-1 ring-brand-100">
                                <Smartphone className="w-7 h-7" />
                            </div>
                            <h3 className="font-heading text-3xl font-bold mb-4 text-slate-900">Mobile-First Ecosystem</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-sm">
                                Designed natively for iOS and Android. Experience the full power of FileDock in your pocket, not a watered-down web view.
                            </p>

                            {/* Visual: iPhone Mockup (Bottom Aligned) */}
                            <div className="mt-auto relative w-full flex justify-center translate-y-6 group-hover:translate-y-2 transition-transform duration-700 ease-out">
                                <div className="w-[240px] h-[300px] bg-slate-900 rounded-t-[3rem] border-[8px] border-slate-900 shadow-2xl relative overflow-hidden ring-1 ring-slate-200">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30 flex items-center justify-center gap-1.5">
                                        <div className="w-1 h-1 bg-slate-800 rounded-full" />
                                        <div className="w-1 h-1 bg-blue-900/50 rounded-full" />
                                    </div>

                                    {/* Screen Content */}
                                    <div className="w-full h-full bg-slate-50 pt-12 overflow-hidden">
                                        {/* Header */}
                                        <div className="px-4 mb-4 flex justify-between items-center">
                                            <div className="h-8 w-8 rounded-full bg-white shadow-sm" />
                                            <div className="space-y-1">
                                                <div className="h-2 w-20 bg-slate-200 rounded-full" />
                                                <div className="h-1.5 w-12 bg-slate-100 rounded-full mx-auto" />
                                            </div>
                                            <div className="h-8 w-8 rounded-full bg-white shadow-sm" />
                                        </div>

                                        {/* Grid grid */}
                                        <div className="p-3 grid grid-cols-2 gap-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="aspect-square rounded-2xl bg-white shadow-sm border border-slate-100 p-2 flex flex-col justify-between group/icon hover:border-brand-200 transition-colors">
                                                    <div className={`w-8 h-8 rounded-full ${i === 1 ? 'bg-orange-100' : i === 2 ? 'bg-blue-100' : 'bg-brand-100'} flex items-center justify-center`}>
                                                        <Cloud className="w-4 h-4 text-slate-600" />
                                                    </div>
                                                    <div className="h-2 w-12 bg-slate-100 rounded-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Speed (Medium) */}
                    <div className="md:col-span-2 group rounded-[2.5rem] border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 p-10 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150" />

                        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm ring-1 ring-amber-100 flex-shrink-0">
                            <Zap className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900">Zero-Latency Streaming</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Buffer-free playback via our optimized global CDN. We routing traffic intelligently to the nearest edge point.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Security (Large) */}
                    <div className="md:col-span-2 md:row-span-2 relative group rounded-[2.5rem] border border-white bg-slate-900 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden text-white flex flex-col">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="p-10 relative z-10 flex flex-col h-full">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-indigo-500 group-hover:text-white shadow-inner ring-1 ring-white/10 backdrop-blur-md">
                                <Lock className="w-7 h-7" />
                            </div>
                            <h3 className="font-heading text-3xl font-bold mb-4">Bank-Grade Encryption</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                AES-256 encryption at rest and TLS 1.3 in transit. Your intellectual property never leaves our secure vault unencrypted.
                            </p>

                            {/* Visual: Lock/Shield Animation */}
                            <div className="mt-auto relative h-40 w-full flex items-center justify-center">
                                {/* Back Shield */}
                                <div className="absolute w-28 h-32 bg-slate-800 rounded-2xl transform  rotate-[-10deg] opacity-60 border border-slate-700/50 group-hover:rotate-[-15deg] group-hover:-translate-x-4 transition-all duration-500" />
                                {/* Front Shield */}
                                <div className="absolute w-28 h-32 bg-indigo-600 rounded-2xl transform rotate-[5deg] shadow-2xl flex items-center justify-center border border-indigo-400/50 group-hover:rotate-[10deg] group-hover:translate-x-4 transition-all duration-500 z-10">
                                    <Shield className="w-12 h-12 text-white" />
                                </div>
                                {/* Particles */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-10 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                                    <div className="absolute bottom-10 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4: Sharing (Medium) */}
                    <div className="md:col-span-2 group rounded-[2.5rem] border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 p-10 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150" />

                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm ring-1 ring-indigo-100 flex-shrink-0">
                            <Share2 className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900">Instant Access Control</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Generate secure, time-limited links in seconds. Revoke access with a single tap from your admin app.
                            </p>
                        </div>
                    </div>

                    {/* Additional Small Features */}
                    <div className="md:col-span-1 rounded-[2rem] border border-white bg-white/40 backdrop-blur-md p-8 hover:bg-white hover:border-brand-100 hover:shadow-lg transition-all group">
                        <Sliders className="w-10 h-10 text-slate-400 mb-4 group-hover:text-brand-600 transition-colors" />
                        <h3 className="font-heading text-lg font-bold mb-2 text-slate-900">Granular Permissions</h3>
                        <p className="text-slate-500 text-sm">Role-based access control.</p>
                    </div>

                    <div className="md:col-span-1 rounded-[2rem] border border-white bg-white/40 backdrop-blur-md p-8 hover:bg-white hover:border-brand-100 hover:shadow-lg transition-all group">
                        <Wifi className="w-10 h-10 text-slate-400 mb-4 group-hover:text-brand-600 transition-colors" />
                        <h3 className="font-heading text-lg font-bold mb-2 text-slate-900">Offline Sync</h3>
                        <p className="text-slate-500 text-sm">Work without internet.</p>
                    </div>

                    <div className="md:col-span-1 rounded-[2rem] border border-white bg-white/40 backdrop-blur-md p-8 hover:bg-white hover:border-brand-100 hover:shadow-lg transition-all group">
                        <Battery className="w-10 h-10 text-slate-400 mb-4 group-hover:text-brand-600 transition-colors" />
                        <h3 className="font-heading text-lg font-bold mb-2 text-slate-900">Battery Saver</h3>
                        <p className="text-slate-500 text-sm">Optimized for long sessions.</p>
                    </div>

                    <div className="md:col-span-1 rounded-[2rem] border border-white bg-white/40 backdrop-blur-md p-8 hover:bg-white hover:border-brand-100 hover:shadow-lg transition-all group">
                        <Signal className="w-10 h-10 text-slate-400 mb-4 group-hover:text-brand-600 transition-colors" />
                        <h3 className="font-heading text-lg font-bold mb-2 text-slate-900">Low Bandwidth</h3>
                        <p className="text-slate-500 text-sm">Works on 3G networks.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
