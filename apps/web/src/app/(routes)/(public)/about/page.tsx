import { ArrowLeft, Code2, Cpu, Fingerprint } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<header className="container mx-auto max-w-4xl px-6 py-8">
				<Link
					href="/"
					className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
				>
					<ArrowLeft className="size-4" />
					Voltar para Home
				</Link>
			</header>

			<main className="container mx-auto max-w-4xl px-6 py-12 md:py-20">
				<section className="mb-24">
					<h1 className="mb-8 font-semibold text-4xl leading-tight tracking-tight md:text-6xl">
						A web se tornou <br className="hidden md:block" />
						<span className="text-muted-foreground">barulhenta e lenta.</span>
					</h1>
					<div className="max-w-2xl text-muted-foreground">
						<p>
							O Linkasaur nasceu de uma insatisfação pessoal. A maioria das
							ferramentas de "link in bio" são plataformas de marketing
							disfarçadas, cheias de rastreadores, scripts pesados e designs
							genéricos.
						</p>
						<p>
							Eu queria construir algo diferente. Uma ferramenta que respeitasse
							o tempo de carregamento, a privacidade do usuário e a estética de
							quem vive no terminal e no editor de código.
						</p>
					</div>
				</section>

				<section className="mb-24 grid gap-8 border-t pt-12 md:grid-cols-3">
					<div className="space-y-4">
						<div className="flex size-10 items-center justify-center rounded-lg border bg-secondary/20">
							<Cpu className="size-5" />
						</div>
						<h3 className="font-semibold text-xl">Performance First</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Zero bloat. Construído sobre Next.js com Server Components. Sua
							página carrega instantaneamente, em qualquer lugar do mundo.
						</p>
					</div>

					<div className="space-y-4">
						<div className="flex size-10 items-center justify-center rounded-lg border bg-secondary/20">
							<Fingerprint className="size-5" />
						</div>
						<h3 className="font-semibold text-xl">Privacidade Real</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Nós não vendemos seus dados. Nosso modelo de negócios é simples:
							ferramentas premium para usuários que valorizam qualidade.
						</p>
					</div>

					<div className="space-y-4">
						<div className="flex size-10 items-center justify-center rounded-lg border bg-secondary/20">
							<Code2 className="size-5" />
						</div>
						<h3 className="font-semibold text-xl">Dev Experience</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Feito por um desenvolvedor, para desenvolvedores. API-ready,
							código aberto e estética minimalista.
						</p>
					</div>
				</section>

				<section className="relative overflow-hidden rounded-3xl border bg-secondary/5 p-8 md:p-12">
					<div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
						<div className="max-w-xl space-y-4">
							<h3 className="font-medium text-2xl">
								Um projeto de paixão e técnica.
							</h3>
							<p className="text-muted-foreground">
								O Linkasaur começou como uma forma de explorar os limites da
								renderização no lado do servidor, mas evoluiu para um produto
								real. Cada linha de código foi escrita pensando na
								manutenibilidade e na escalabilidade.
							</p>
							<div className="flex gap-4 pt-4">
								<div className="flex flex-wrap gap-2 font-mono text-muted-foreground text-sm">
									<span>Next.js</span> • <span>Tailwind</span> •{" "}
									<span>TypeScript</span>
								</div>
							</div>
						</div>

						<div className="flex-shrink-0">
							<Button variant="outline" asChild>
								<a
									href="https://github.com/raphaeleliass/linkasaur"
									target="_blank"
									rel="noopener noreferrer"
								>
									Ver no GitHub
								</a>
							</Button>
						</div>
					</div>

					<div className="-mt-16 -mr-16 absolute top-0 right-0 size-64 rounded-full bg-primary/5 blur-3xl" />
				</section>

				<div className="mt-24 text-center">
					<h2 className="mb-6 font-semibold text-2xl">
						Pronto para reivindicar seu espaço?
					</h2>
					<Button size="lg" asChild>
						<Link href="/auth/sign-up">Começar agora</Link>
					</Button>
				</div>
			</main>
		</main>
	);
}
