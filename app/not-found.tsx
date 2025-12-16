"use client";

import { usePathname } from "next/navigation";
import VideoRedirect from "@/components/logic/VideoRedirect";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {

    const pathname = usePathname();

    // Logic: Identify video IDs from root (filedock.in/ID) or legacy /v/ path (filedock.in/v/ID)
    let videoId: string | null = null;

    if (pathname) {
        if (pathname.startsWith("/v/") && pathname.length > 3) {
            videoId = pathname.split("/v/")[1];
        } else {
            const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
            // Assume video IDs don't have slashes and are of sufficient length
            if (cleanPath && !cleanPath.includes("/") && cleanPath.length > 3) {
                videoId = cleanPath;
            }
        }
    }

    if (videoId) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
                <VideoRedirect videoId={videoId} />
            </div>
        );
    }

    // Standard 404 UI
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
            <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-muted-foreground mb-8">Could not find requested resource</p>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
