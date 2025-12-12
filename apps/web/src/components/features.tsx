import { BarChart3, Link as LinkIcon, Palette } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Features() {
	return (
		<section className="py-16 md:py-32" id={"features"}>
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="text-balance font-semibold text-4xl lg:text-5xl">
						Tudo o que você precisa em um só lugar
					</h2>
					<p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
						Simples o suficiente para começar agora, poderoso o suficiente para
						acompanhar seu crescimento.
					</p>
				</div>

				<div className="mx-auto mt-8 grid @min-4xl:max-w-full max-w-sm @min-4xl:grid-cols-3 gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
					<Card className="group border-none bg-transparent shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<LinkIcon className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium text-xl">Links Ilimitados</h3>
						</CardHeader>

						<CardContent>
							<p className="font-sans text-muted-foreground text-sm leading-relaxed">
								Não se limite a apenas um link na bio. Adicione todas as suas
								redes, vídeos, playlists e produtos sem restrições.
							</p>
						</CardContent>
					</Card>

					<Card className="group border-none bg-transparent shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Palette className="size-6" aria-hidden />
							</CardDecorator>

							<div className="mt-6 flex items-center justify-center gap-2">
								<h3 className="font-medium text-xl">Do seu jeito</h3>
								<span className="rounded-full bg-primary/10 px-2 py-0.5 font-sans font-semibold text-[10px] text-primary uppercase tracking-wide">
									Em breve
								</span>
							</div>
						</CardHeader>

						<CardContent>
							<p className="font-sans text-muted-foreground text-sm leading-relaxed">
								Personalize cores, fundos e estilos. Crie uma página que reflita
								perfeitamente a identidade visual da sua marca.
							</p>
						</CardContent>
					</Card>

					<Card className="group border-none bg-transparent shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<BarChart3 className="size-6" aria-hidden />
							</CardDecorator>

							<div className="mt-6 flex items-center justify-center gap-2">
								<h3 className="font-medium text-xl">Dados Reais</h3>
								<span className="rounded-full bg-primary/10 px-2 py-0.5 font-sans font-semibold text-[10px] text-primary uppercase tracking-wide">
									Em breve
								</span>
							</div>
						</CardHeader>

						<CardContent>
							<p className="font-sans text-muted-foreground text-sm leading-relaxed">
								Entenda sua audiência. Acompanhe a quantidade de cliques e
								descubra qual conteúdo engaja mais os seus seguidores.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
		/>

		<div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l bg-background">
			{children}
		</div>
	</div>
);
