import Features from "@/components/pages/home/features/features";
import Hero from "@/components/pages/home/hero";
import Navbar from "@/components/pages/home/navbar";

export default function page() {
	return (
		<main className="relative flex flex-col items-center justify-center gap-12">
			<Navbar />
			<Hero />
			<Features />
		</main>
	);
}
