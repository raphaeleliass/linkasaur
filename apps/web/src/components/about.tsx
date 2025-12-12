import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
	return (
		<section className="py-16 md:py-32" id={"about"}>
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
					<h2 className="font-medium text-4xl leading-tight">
						O Linkasaur nasceu de uma frustração: links deveriam ser bonitos,
						não apenas funcionais.
					</h2>
					<div className="space-y-6 text-muted-foreground">
						<p>
							A maioria dos agregadores de links foca apenas na utilidade,
							entregando listas sem vida. Nós acreditamos que sua página de
							links é uma extensão da sua identidade digital.
						</p>
						<p>
							Construímos uma plataforma onde{" "}
							<span className="font-semibold text-foreground">
								performance encontra o design
							</span>
							. Sem rastreadores invasivos, sem carregamento lento e com uma
							estética que valoriza o seu conteúdo.
						</p>
						<Button
							asChild
							variant="secondary"
							size="sm"
							className="gap-1 pr-1.5 text-foreground"
						>
							<Link href="/about">
								<span>Nossa filosofia</span>
								<ChevronRight className="size-4" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
