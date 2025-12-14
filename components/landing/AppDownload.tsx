
import { Button } from "@/components/ui/button";
import { User, ShieldAlert } from "lucide-react";

export default function AppDownload() {
    return (
        <section id="download" className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="relative rounded-[2.5rem] bg-slate-50 border border-slate-200 overflow-hidden p-8 md:p-20 flex flex-col items-center text-center">

                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                            Ready to Mobile-First?
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Join thousands of teams who trust FileDock for secure, instant file sharing on iOS and Android.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 pt-10 w-full">
                            {/* User App Column */}
                            <div className="flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 group">
                                <div className="flex items-center gap-2 text-brand-600 font-bold tracking-wider text-sm">
                                    <User className="w-5 h-5" /> USER APP
                                </div>
                                <div className="flex flex-col w-full gap-4">
                                    <Button className="w-full h-16 bg-slate-900 text-white hover:bg-slate-800 text-left px-4 flex items-center gap-4 transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/20">
                                        <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>
                                        <div className="flex flex-col items-start leading-none">
                                            <span className="text-[10px] uppercase font-medium text-slate-300">Download on the</span>
                                            <span className="text-xl font-bold">App Store</span>
                                        </div>
                                    </Button>
                                    <Button className="w-full h-16 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 text-left px-4 flex items-center gap-4 transition-all hover:scale-[1.02]">
                                        <svg viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                        <div className="flex flex-col items-start leading-none">
                                            <span className="text-[10px] uppercase font-medium text-slate-500">Get it on</span>
                                            <span className="text-xl font-bold">Google Play</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>

                            {/* Admin App Column */}
                            <div className="flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 group">
                                <div className="flex items-center gap-2 text-indigo-600 font-bold tracking-wider text-sm">
                                    <ShieldAlert className="w-5 h-5" /> ADMIN APP
                                </div>
                                <div className="flex flex-col w-full gap-4">
                                    <Button className="w-full h-16 bg-slate-900 text-white hover:bg-slate-800 text-left px-4 flex items-center gap-4 transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/20">
                                        <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>
                                        <div className="flex flex-col items-start leading-none">
                                            <span className="text-[10px] uppercase font-medium text-slate-300">Download on the</span>
                                            <span className="text-xl font-bold">App Store</span>
                                        </div>
                                    </Button>
                                    <Button className="w-full h-16 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 text-left px-4 flex items-center gap-4 transition-all hover:scale-[1.02]">
                                        <svg viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                        <div className="flex flex-col items-start leading-none">
                                            <span className="text-[10px] uppercase font-medium text-slate-500">Get it on</span>
                                            <span className="text-xl font-bold">Google Play</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
