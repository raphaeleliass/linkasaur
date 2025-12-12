import About from "@/components/about";
import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";

export default function page() {
	return (
		<main className="">
			<HeroSection />
			<Features />
			<About />
			<Pricing />
			<CallToAction />
		</main>
	);
}
