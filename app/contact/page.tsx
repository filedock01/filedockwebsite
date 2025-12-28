
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Contact() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="relative py-24 min-h-screen bg-background overflow-hidden flex items-center">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="container px-4 mx-auto max-w-7xl relative z-10">
                    <div className="mb-12">
                        <Link href="/">
                            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-brand-500 transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-500">Support</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-brand-500/10 rounded-2xl text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Email Us</h3>
                                        <p className="text-sm text-muted-foreground mb-2">Our friendly team is here to help.</p>
                                        <a href="mailto:filedock1@gmail.com" className="text-brand-600 font-medium hover:text-brand-700 hover:underline transition-colors">filedock1@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Office</h3>
                                        <p className="text-sm text-muted-foreground mb-2">Come say hello at our office HQ.</p>
                                        <p className="text-foreground/80">BlackGrapes Softech<br />New Delhi, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Phone</h3>
                                        <p className="text-sm text-muted-foreground mb-2">Mon-Fri from 8am to 5pm.</p>
                                        <p className="text-foreground/80">+91 99999 99999</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Placeholder */}
                        <div className="bg-card/50 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-border/50 shadow-xl shadow-brand-500/5">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-muted-foreground/50" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-muted-foreground/50" placeholder="you@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none placeholder:text-muted-foreground/50" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
