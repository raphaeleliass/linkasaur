"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";
import Tag from "./tag";

export default function Hero() {
	const divRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!divRef.current) return;

		gsap.to(divRef.current.children, {
			opacity: 1,
			y: 0,
			stagger: 0.2,
			duration: 1,
		});
	}, [divRef]);

	return (
		<div className="section">
			<BackgroundRippleEffect cols={12} rows={8} />
			<div
				className="appear-class z-10 flex w-full select-none flex-col items-center justify-center gap-4"
				ref={divRef}
			>
				<Tag>
					{" "}
					<span className="size-2 animate-pulse rounded-full bg-primary" /> Sua
					presença online, sem complicação
				</Tag>
				<p className="z-10 mt-4 max-w-2xl text-balance text-center font-lexend font-semibold text-5xl drop-shadow-2xl max-sm:max-w-xs max-sm:text-3xl">
					Todos os seus{" "}
					<span className="relative after:absolute after:bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-l after:from-red-500 after:to-emerald-300">
						links
					</span>
					,
					<br /> em um só lugar.
				</p>
				<p className="description">
					Chega de compartilhar vários links. Mostre seu trabalho, redes sociais
					e projetos em segundos. Mais impa cto, menos esforço.
				</p>

				<div className="mt-8 space-x-2">
					<Button>Cadastre-se agora</Button>
				</div>
				<div className="mt-12 aspect-video w-full rounded-xl bg-conic-90/oklch from-background to-foreground drop-shadow-2xl max-sm:max-w-xs md:max-w-3xl" />
			</div>
		</div>
	);
}
