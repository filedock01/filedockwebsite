
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="relative py-24 min-h-screen bg-background overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="container px-4 mx-auto max-w-7xl relative z-10">
                    <div className="mb-10">
                        <Link href="/">
                            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-brand-500 transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </Button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-brand-500/10 rounded-xl text-brand-600">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="font-heading text-4xl font-bold text-foreground tracking-tight">Terms of Service</h1>
                            <p className="text-muted-foreground mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using FileDock's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to use our Services only for lawful purposes. You are strictly prohibited from using the Services to store, share, or distribute illegal content, malware, or content that violates intellectual property rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to suspend or terminate your access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of our Services, us, or third parties, or for any other reason.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms, please contact us at <a href="mailto:filedock1@gmail.com" className="text-brand-600 hover:text-brand-500 hover:underline transition-colors font-medium">filedock1@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
