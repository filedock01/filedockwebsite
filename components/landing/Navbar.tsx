
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cloud, Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
];

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 pt-2 md:pt-2">
            <nav className="w-full max-w-6.9xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-indigo-500/5 rounded-full px-2 md:px-2 py-2 flex items-center justify-between transition-all hover:shadow-indigo-500/10 hover:bg-white/80">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="bg-brand-50 p-2 rounded-full border border-brand-100 group-hover:bg-brand-100 transition-colors">
                        <Cloud className="w-5 h-5 text-brand-600" />
                    </div>
                    <span className="font-heading font-bold text-lg tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                        FileDock
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white px-4 py-1.5 rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex items-center">
                    <Link href="#download" passHref>
                        <Button className="font-semibold bg-brand-500 hover:bg-black text-white shadow-lg shadow-slate-900/20 rounded-full px-6 h-10 text-sm transition-transform hover:scale-105">
                            Get App
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100 rounded-full">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="w-full rounded-b-[2.5rem] pt-12 pb-12 border-b border-slate-200 shadow-2xl">
                            <SheetHeader className="mb-8 px-4">
                                <SheetTitle className="text-left flex items-center justify-center gap-2">
                                    <div className="bg-brand-50 p-2 rounded-full">
                                        <Cloud className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <span className="text-2xl font-bold">FileDock</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 px-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all py-4 px-6 rounded-2xl text-center"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-6">
                                    <Link href="#download" className="w-full block">
                                        <Button className="w-full font-bold text-lg bg-slate-900 hover:bg-black text-white shadow-xl shadow-slate-900/20 rounded-2xl h-14">
                                            Download App
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    );
}
