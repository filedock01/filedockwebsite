
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cloud, Loader2, Play, FileIcon, Smartphone, Download } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function VideoRedirect({ videoId }: { videoId: string }) {
    const router = useRouter();
    const [status, setStatus] = useState("Checking for app...");


    useEffect(() => {
        // Deep Linking Logic
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isAndroid = /android/i.test(userAgent);
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;


        // Current URL
        const currentUrlObj = new URL(window.location.href);
        // Add a query param to the fallback URL so we know we've failing already
        currentUrlObj.searchParams.set('fallback', 'true');
        const fallbackUrl = currentUrlObj.toString();

        // Intent URL (Android)
        // S.browser_fallback_url will point to proper URL with ?fallback=true
        const appScheme = `intent://filedock.in/${videoId}#Intent;scheme=https;package=com.ignito.filedockuser;S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;

        let timeout: NodeJS.Timeout;

        const tryOpenApp = () => {
            // ROBUST LOOP CHECK:
            // If URL has ?fallback=true, it means we already tried opening the app,
            // the intent failed, and Android redirected us back here.
            // So we STOP and just show the download button.
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('fallback') === 'true') {
                console.log("Fallback detected. stopping auto-redirect.");
                setStatus("Download FileDock to watch");
                return;
            }

            if (isAndroid) {
                // On Android, use the Intent URL
                window.location.href = appScheme;

                // Fallback timeout not strictly needed with browser_fallback_url, 
                // but good for UI feedback if intent doesn't fire immediately
                timeout = setTimeout(() => {
                    // If we are still here, intent *might* have failed or user ignored it.
                    // But usually fallback_url handles the reload.
                    setStatus("Download FileDock to watch");
                }, 2500);
            } else if (isIOS) {
                // iOS Universal Link check
                // ... (iOS doesn't use the same Intent system, keep as is for now)
                window.location.href = `https://filedock.in/${videoId}`;
                timeout = setTimeout(() => {
                    setStatus("Download FileDock to watch");
                }, 2000);
            } else {
                // Desktop
                setStatus("Download FileDock to watch");
            }
        };

        // Auto-attempt on mount
        tryOpenApp();


        return () => clearTimeout(timeout);
    }, [videoId, router]);


    return (
        <div className="max-w-md w-full animate-fade-in-up">
            {status !== "Download FileDock to watch" ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center animate-pulse">
                        <Cloud className="w-8 h-8 text-brand-600" />
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Opening in FileDock...
                    </p>
                </div>
            ) : (
                <Card className="p-6 border-brand-100 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600" />

                    <div className="text-center mb-6">
                        <div className="mx-auto w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-4 relative group cursor-pointer overflow-hidden border border-border">
                            {/* Mock Thumbnail / File Icon */}
                            <div className="absolute inset-0 bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors" />
                            <FileIcon className="w-10 h-10 text-brand-600 group-hover:scale-110 transition-transform" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                                    <Play className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold font-heading mb-1">Project_Launch_V4.mp4</h2>
                        <p className="text-sm text-muted-foreground">1.2 GB • Shared via FileDock</p>
                    </div>

                    <div className="space-y-3">
                        <Button className="w-full h-12 text-base font-semibold shadow-lg shadow-brand-500/20" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.ignito.filedockuser', '_blank')}>
                            <Smartphone className="w-4 h-4 mr-2" /> Open in FileDock App
                        </Button>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                            <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">or download app</span></div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-10 text-xs" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.ignito.filedockuser', '_blank')}>
                                Google Play
                            </Button>
                            <Button variant="outline" className="h-10 text-xs" onClick={() => window.open('https://apps.apple.com/app/filedock', '_blank')}>
                                App Store
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <Link href="/" className="text-xs text-muted-foreground hover:text-brand-600 transition-colors">
                            Learn more about FileDock Security
                        </Link>
                    </div>
                </Card>
            )}
        </div>
    );
}
