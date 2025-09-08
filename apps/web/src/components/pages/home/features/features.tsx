import { Wrench } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { featuresData } from "@/constants/features";
import Tag from "../tag";
import FeaturesCard, {
	FeatureCard,
	FeatureCardContent,
	FeatureCardDescription,
	FeatureCardTitle,
} from "./features-card";

export default function Features() {
	return (
		<section className="section items-center gap-12">
			<Tag>
				<Wrench size={14} /> Features
			</Tag>
			<article className="flex w-full flex-col items-center justify-center gap-4">
				<h2 className="max-w-2xl text-center font-semibold text-4xl">
					A melhor estratégia para te tornar{" "}
					<span className="text-primary">online</span> pelo mundo.
				</h2>

				<p className="max-w-lg text-center font-normal text-muted-foreground">
					Maximize sua produtividade e sua segurança com seus links totalmente
					rastreáveis. Amigável para novos usuários.
				</p>

				<div className="grid max-w-3xl grid-cols-2 grid-rows-2 gap-4">
					{featuresData.map((feat, i) => (
						<FeatureCard
							className={
								i === 0
									? "col-span-2 flex h-70 flex-row overflow-hidden max-sm:flex-col"
									: ""
							}
							key={feat.title}
						>
							<FeatureCardContent
								className={
									i === 0
										? "flex h-full max-w-xs flex-col items-start gap-4"
										: ""
								}
							>
								<FeatureCardTitle>{feat.title}</FeatureCardTitle>
								<FeatureCardDescription>
									{feat.description}
								</FeatureCardDescription>

								{i === 0 && <Button className="mt-auto">Saiba mais</Button>}
							</FeatureCardContent>

							{/* TODO ADICIONAR IMAGEM*/}
							{/* <Image src={""} alt=""/> */}

							<div
								className={
									i === 0
										? "mt-auto ml-auto aspect-video h-5/6 w-1/2 rounded bg-conic-90/oklch from-secondary to-primary"
										: "aspect-video w-1/2 rounded-2xl bg-conic-90/oklch from-secondary to-primary"
								}
							/>
						</FeatureCard>
					))}
				</div>
			</article>
		</section>
	);
}
