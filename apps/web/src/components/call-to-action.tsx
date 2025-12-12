import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-5xl rounded-3xl border bg-background/50 px-6 py-12 backdrop-blur-sm md:py-20 lg:py-32">
				<div className="text-center">
					<h2 className="text-balance font-semibold text-4xl tracking-tight lg:text-5xl">
						Garanta seu <span className="text-primary">@usuario</span> antes que
						alguém o faça.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
						Seu nome é sua marca. Crie uma página de links perfeita em minutos e
						centralize sua presença digital. É grátis e não precisa saber
						programar.
					</p>

					<div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
						<Button asChild size="lg" className="px-8 font-semibold text-base">
							<Link href="/auth/sign-up">
								<span>Reivindicar meu link</span>
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline" className="text-base">
							<Link href="/features">
								<span>Ver todos os recursos</span>
							</Link>
						</Button>
					</div>

					<p className="mt-6 text-muted-foreground text-sm">
						Junte-se a +10.000 criadores criando páginas hoje.
					</p>
				</div>
			</div>
		</section>
	);
}
