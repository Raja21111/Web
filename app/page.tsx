import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <Services />
            <Team />
            <Testimonials />
            <CTA />

            {/* Placeholder for other sections */}
            <section id="features" className="py-20 bg-muted/30">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Nexera?</h2>
                    <p className="text-muted-foreground">More features coming soon...</p>
                </div>
            </section>
        </div>
    );
}
