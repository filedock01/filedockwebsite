
import Link from "next/link";
import { Cloud, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border/40 py-12">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <Cloud className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-heading font-bold text-lg">FileDock</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground border-t border-border/40 pt-8">
                    <p>&copy; {new Date().getFullYear()} FileDock. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Contact Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
