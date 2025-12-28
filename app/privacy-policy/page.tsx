
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
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
                            <Shield className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="font-heading text-4xl font-bold text-foreground tracking-tight">Privacy Policy</h1>
                            <p className="text-muted-foreground mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to FileDock ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services (collectively, "Services"). This policy explains our practices regarding the collection, use, and disclosure of your information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-3 text-muted-foreground marker:text-brand-500">
                                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and other contact details you provide when creating an account.</li>
                                <li><strong className="text-foreground">Usage Data:</strong> Information on how you use the Services, such as file upload history, download logs, and device information.</li>
                                <li><strong className="text-foreground">Cookies:</strong> We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mt-3 marker:text-brand-500">
                                <li>Provide, maintain, and improve our Services.</li>
                                <li>Process transactions and send related information.</li>
                                <li>Send you technical notices, updates, security alerts, and support messages.</li>
                                <li>Respond to your comments, questions, and customer service requests.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use industry-standard encryption and security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:filedock1@gmail.com" className="text-brand-600 hover:text-brand-500 hover:underline transition-colors font-medium">filedock1@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
