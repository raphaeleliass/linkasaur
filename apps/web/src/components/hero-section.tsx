"use client";
import { Mail, SendHorizonal } from "lucide-react";
import { motion } from "motion/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Badge from "./ui/badge";
import { Iphone } from "./ui/iphone";

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

export default function HeroSection() {
	const form = useForm<{ inputItem: string }>();

	function submitForm({ inputItem }: { inputItem: string }) {
		if (!inputItem) {
			return form.setError("inputItem", {
				message: "Este campo não pode estar vazio!",
			});
		}

		const storedMail = sessionStorage.getItem("email");

		if (!storedMail) sessionStorage.setItem("email", inputItem);

		redirect("/auth/sign-up");
	}

	return (
		<main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
			<section>
				<div>
					<div className="relative z-10 mx-auto max-w-4xl text-center">
						<motion.div
							initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "none" }}
							transition={{ ease: "linear", duration: 0.6 }}
						>
							<Badge className="mb-8">
								<div className="size-2 animate-pulse rounded-full bg-green-500" />
								Simples. Rápido. Bonito.
							</Badge>
						</motion.div>
						<TextEffect
							preset="fade-in-blur"
							speedSegment={0.3}
							as="h1"
							className="text-balance font-medium text-5xl md:text-6xl"
						>
							Transforme cliques em resultados.
						</TextEffect>
						<TextEffect
							per="line"
							preset="fade-in-blur"
							speedSegment={0.3}
							delay={0.5}
							as="p"
							className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
						>
							Centralize sua presença digital. O Linkasaur é a maneira mais
							inteligente de guiar sua audiência para onde ela realmente gera
							valor para você.
						</TextEffect>

						<AnimatedGroup
							variants={{
								item: {
									container: {
										transition: {
											staggerChildren: 0.05,
											delayChildren: 0.75,
										},
									},

									...transitionVariants,
								},
							}}
							className="mt-12"
						>
							<form
								onSubmit={form.handleSubmit(submitForm)}
								className="mx-auto max-w-sm"
							>
								<div
									className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border bg-background pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted data-[error=true]:border-red-400 data-[error=true]:text-red-400"
									data-error={!form.formState.isValid}
								>
									<Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

									<input
										{...form.register("inputItem")}
										placeholder="nome@exemplo.com"
										className="h-12 w-full bg-transparent pl-12 focus:outline-none"
										type="email"
									/>

									<div className="md:pr-1.5 lg:pr-0">
										<Button
											aria-label="submit"
											size="sm"
											className="rounded-(--radius)"
										>
											<span className="hidden md:block">Começar agora</span>
											<SendHorizonal
												className="relative mx-auto size-5 md:hidden"
												strokeWidth={2}
											/>
										</Button>
									</div>
								</div>
								<p className="mt-4 text-red-400 text-sm">
									{form.formState.errors.inputItem?.message}
								</p>
							</form>

							<div
								aria-hidden
								className="relative mx-auto mt-32 max-w-2xl bg-radial from-primary/50 to-55% to-transparent text-left dark:from-primary/25"
							>
								<div className="-translate-x-3 -translate-y-12 sm:-translate-x-6 absolute inset-0 mx-auto w-80 rounded-[2rem] border border-border/50 bg-background p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)]">
									<div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50" />
								</div>
								<div className="mx-auto max-h-96 w-80 translate-x-4 rounded-[2rem] border border-border/50 bg-muted p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8 dark:bg-background/50">
									<Iphone />
								</div>
								<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5" />
							</div>
						</AnimatedGroup>
					</div>
				</div>
			</section>
		</main>
	);
}
