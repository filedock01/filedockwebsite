
import { Card } from "@/components/ui/card";

const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Files Stored", value: "1M+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Global Servers", value: "24" },
]

export default function Stats() {
    return (
        <section className="py-10 bg-background border-y border-border/50">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center">
                            <span className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-1">
                                {stat.value}
                            </span>
                            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
