
import { Upload, Link as LinkIcon, Smartphone, Play, CheckCircle2, Copy, Lock, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 border-t border-slate-200 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-brand-200 text-brand-700 bg-white">
                        Simple Workflow
                    </Badge>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-slate-900">How It Works</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From upload to playback in three simple steps.
                    </p>
                </div>

                <div className="relative space-y-24">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-brand-200 via-indigo-200 to-transparent -translate-x-1/2 hidden md:block border-l border-dashed border-slate-300" />

                    {/* Step 1: Upload (Admin) */}
                    <div className="flex flex-col md:flex-row gap-12 items-center relative">
                        <div className="flex-1 w-full flex justify-end">
                            {/* Visual: Upload Card */}
                            <div className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-6 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-indigo-500" />
                                {/* Floating Background Icons */}
                                <Upload className="absolute top-10 right-10 w-12 h-12 text-slate-100 rotate-12" />

                                {/* Upload UI */}
                                <div className="w-full max-w-xs bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                            <Upload className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-2 w-24 bg-slate-200 rounded-full mb-1.5" />
                                            <div className="h-2 w-16 bg-slate-100 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-xs font-bold text-slate-500">
                                            <span>Uploading...</span>
                                            <span>85%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="w-[85%] h-full bg-brand-500 rounded-full animate-pulse" />
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium bg-white px-2 py-1 rounded border border-slate-100 w-fit">
                                            <Lock className="w-3 h-3" /> Encrypted (AES-256)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Marker */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm z-20 shadow-sm hidden md:flex">
                            1
                        </div>

                        <div className="flex-1 space-y-6 text-center md:text-left md:pl-10">
                            <div className="inline-block p-3 rounded-2xl bg-brand-50 text-brand-600 mb-2 shadow-sm">
                                <Upload className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-3xl font-bold text-slate-900">Upload via Admin App</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Upload videos securely directly from your mobile device. We automatically compress and encrypt every file instantly.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Generate Link (System) */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center relative">
                        <div className="flex-1 w-full flex justify-start">
                            {/* Visual: Link Card */}
                            <div className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-indigo-600 to-violet-700 shadow-xl shadow-indigo-900/20 p-6 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform duration-500 text-white overflow-hidden">
                                {/* Grid Pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

                                {/* Link UI */}
                                <div className="w-full max-w-[280px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg relative z-10">
                                    <div className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-3">Shareable Link Generated</div>
                                    <div className="flex items-center gap-2 bg-black/20 rounded-lg p-2 mb-4 border border-white/10">
                                        <div className="flex-1 font-mono text-xs text-indigo-100 truncate">filedock.in/v/x89z...</div>
                                        <div className="p-1.5 bg-white/10 rounded hover:bg-white/20 cursor-pointer transition-colors">
                                            <Copy className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-indigo-500/50 border border-indigo-400/30 text-[10px] font-bold">
                                            <Clock className="w-3 h-3" /> Expires in 24h
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-indigo-500/50 border border-indigo-400/30 text-[10px] font-bold">
                                            <Lock className="w-3 h-3" /> Password Protected
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Marker */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm z-20 shadow-sm hidden md:flex">
                            2
                        </div>

                        <div className="flex-1 space-y-6 text-center md:text-right md:pr-10">
                            <div className="inline-block p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-2 shadow-sm">
                                <LinkIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-3xl font-bold text-slate-900">Generate Smart Links</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Create unique, time-limited URLs instantly. Set password protection and expiry dates for total control over your content.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Instant Access (User) */}
                    <div className="flex flex-col md:flex-row gap-12 items-center relative">
                        <div className="flex-1 w-full flex justify-end">
                            {/* Visual: Player UI */}
                            <div className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-6 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-500" />
                                <Play className="absolute bottom-10 left-10 w-16 h-16 text-slate-100 -rotate-12" />

                                {/* Player UI */}
                                <div className="w-full max-w-[280px] bg-slate-900 text-white rounded-2xl overflow-hidden shadow-xl shadow-slate-900/20 relative z-10 transform scale-100 group-hover:scale-105 transition-transform duration-500">
                                    {/* Fake Video Content */}
                                    <div className="h-32 bg-slate-800 relative flex items-center justify-center group/play">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/30 group-hover/play:scale-110 transition-transform">
                                            <Play className="w-4 h-4 fill-current" />
                                        </div>
                                        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 rounded text-[9px] font-bold">10:42</div>
                                    </div>
                                    {/* Controls */}
                                    <div className="p-3">
                                        <div className="h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
                                            <div className="w-1/3 h-full bg-brand-500 rounded-full" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400">03:15 / 10:42</div>
                                            <div className="flex gap-2">
                                                <div className="w-4 h-4 bg-white/10 rounded" />
                                                <div className="w-4 h-4 bg-white/10 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Marker */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-teal-100 text-teal-600 flex items-center justify-center font-bold text-sm z-20 shadow-sm hidden md:flex">
                            3
                        </div>

                        <div className="flex-1 space-y-6 text-center md:text-left md:pl-10">
                            <div className="inline-block p-3 rounded-2xl bg-teal-50 text-teal-600 mb-2 shadow-sm">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-3xl font-bold text-slate-900">Instant Access</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Users click the link and content opens directly in the **User App**. No buffering, no downloads—just instant playback.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
