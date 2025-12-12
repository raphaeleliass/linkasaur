import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Pricing() {
	return (
		<section className="py-16 md:py-32" id={"pricing"}>
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl space-y-6 text-center">
					<h2 className="text-center font-semibold text-4xl lg:text-5xl">
						Escolha o plano ideal
					</h2>
					<p className="text-lg text-muted-foreground">
						Comece gratuitamente para organizar o básico ou vá de Pro para ter
						liberdade total e entender sua audiência.
					</p>
				</div>

				<div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
					<div className="flex flex-col justify-between space-y-8 rounded-(--radius) border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
						<div className="space-y-4">
							<div>
								<h3 className="font-medium text-lg">Inicial</h3>
								<span className="my-3 block font-semibold text-4xl">R$ 0</span>
								<p className="text-muted-foreground text-sm">
									Para quem está começando
								</p>
							</div>

							<Button asChild variant="outline" className="w-full">
								<Link href="/auth/sign-up">Criar conta grátis</Link>
							</Button>

							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-muted-foreground text-sm">
								{[
									"Até 5 links no perfil",
									"Tema padrão Linkasaur",
									"Perfil público",
								].map((item, index) => (
									// biome-ignore lint: unnecessary lint 'cause this list doesn't will suffer re-renders
									<li key={index} className="flex items-center gap-2">
										<Check className="size-4 text-green-600" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-(--radius) border p-6 shadow-green-900/5 shadow-xl md:col-span-3 lg:p-10 dark:bg-muted dark:[--color-muted:var(--color-zinc-900)]">
						<div className="absolute top-0 right-0 rounded-bl-lg bg-green-600 px-3 py-1 font-bold text-white text-xs">
							RECOMENDADO
						</div>

						<div className="grid gap-6 sm:grid-cols-2">
							<div className="space-y-4">
								<div>
									<h3 className="font-medium text-green-600 text-lg dark:text-green-400">
										Pro
									</h3>
									<span className="my-3 block font-semibold text-4xl">
										R$ 19,90{" "}
										<span className="font-normal text-base text-muted-foreground">
											/mês
										</span>
									</span>
									<p className="text-muted-foreground text-sm">
										Para criadores em crescimento
									</p>
								</div>

								<Button
									asChild
									className="w-full bg-green-600 text-white hover:bg-green-700"
								>
									<Link href="/auth/sign-up?plan=pro">Assinar Pro</Link>
								</Button>
							</div>

							<div>
								<div className="mb-4 font-medium text-sm">
									Tudo do plano grátis, mais:
								</div>

								<ul className="list-outside space-y-3 text-sm">
									{[
										"Links Ilimitados",
										"Analytics de Cliques (Em breve)",
										"Temas Personalizáveis (Em breve)",
										"Remoção da marca Linkasaur",
										"Suporte Prioritário",
									].map((item, index) => (
										// biome-ignore lint: unnecessary lint 'cause this list doesn't will suffer re-renders
										<li key={index} className="flex items-start gap-2">
											<div className="mt-0.5 rounded-full bg-green-100 p-0.5 dark:bg-green-900/30">
												<Check className="size-3 text-green-600 dark:text-green-400" />
											</div>
											<span className="text-foreground/90">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
