
import { Metadata } from "next";
import VideoRedirect from "@/components/logic/VideoRedirect";

type Props = {
    params: { id: string };
};

// This function generates dynamic metadata for social previews
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const videoId = params.id;

    // In a real app, fetch video details from backend API here
    // const video = await fetch(`https://api.filedock.in/videos/${videoId}`).then(res => res.json())

    return {
        title: `Watch Video on FileDock`,
        description: "Secure, fast, and private video sharing via FileDock.",
        openGraph: {
            title: "Shared Video - FileDock",
            description: "Click to watch this video securely on FileDock.",
            images: ["/images/og-placeholder.jpg"], // Ensure this exists or use a dynamic OG image generator
        },
        twitter: {
            card: "summary_large_image",
            title: "Shared Video - FileDock",
            description: "Click to watch this video securely on FileDock.",
        }
    };
}

export default function VideoPage({ params }: Props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
            <VideoRedirect videoId={params.id} />
        </div>
    );
}
