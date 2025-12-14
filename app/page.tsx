
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AppDownload from "@/components/landing/AppDownload";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import Showcase from "@/components/landing/Showcase";
import Footer from "@/components/landing/Footer";
import HowItWorks from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Showcase />
      <Features />
      <HowItWorks />
      <AppDownload />
      <Footer />
    </main>
  );
}
