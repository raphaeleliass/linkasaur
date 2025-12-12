"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v3";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import { baseUrl } from "@/constants";
import { authClient } from "@/lib/auth-client";
import { userStore } from "@/store/userStore";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";

const formSchema = z.object({
	email: z.string().email().nonempty(),
	password: z
		.string()
		.min(6, { message: "Password must contain at least 6 characters" })
		.nonempty(),
});

type FormType = z.infer<typeof formSchema>;

export default function Login() {
	const { user } = userStore();

	useEffect(() => {
		(() => {
			if (!user) return;

			redirect("/me");
		})();
	}, [user]);

	const form = useForm<FormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function handleLoginGoogle() {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: `${baseUrl}/me`,
			fetchOptions: { onSuccess: () => {} },
		});
	}

	async function handleLoginEmail({ email, password }: FormType) {
		console.log(email, password);
	}

	return (
		<section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleLoginEmail)}
					className="m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border bg-card p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
				>
					<div className="p-8 pb-6">
						<div>
							<Link href="/" aria-label="go home">
								<Logo />
							</Link>
							<h1 className="mt-4 mb-1 font-semibold text-xl">Entre</h1>
							<p className="text-sm">
								Bem vindo(a), de volta! Entre para continuar
							</p>
						</div>

						<div className="mt-6 gap-3">
							<Button
								type="button"
								variant="outline"
								className="w-full"
								onClick={handleLoginGoogle}
							>
								<svg
									role="img"
									aria-label="icon"
									xmlns="http://www.w3.org/2000/svg"
									width="0.98em"
									height="1em"
									viewBox="0 0 256 262"
								>
									<path
										fill="#4285f4"
										d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
									/>
									<path
										fill="#34a853"
										d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
									/>
									<path
										fill="#fbbc05"
										d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
									/>
									<path
										fill="#eb4335"
										d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
									/>
								</svg>
								<span>Google</span>
							</Button>
						</div>

						<hr className="my-4 border-dashed" />

						<div className="space-y-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<div className="space-y-2">
											<FormLabel htmlFor="email" className="block text-sm">
												email
											</FormLabel>
											<FormControl>
												<Input type="email" id={"email"} {...field} />
											</FormControl>
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<div className="space-y-0.5">
											<div className="flex items-center justify-between">
												<FormLabel htmlFor="pwd" className="text-sm">
													Password
												</FormLabel>
												<Button asChild variant="link" size="sm">
													<Link
														href="#"
														className="link intent-info variant-ghost text-sm"
													>
														Forgot your Password ?
													</Link>
												</Button>
											</div>
											<FormControl>
												<Input
													type="password"
													{...field}
													id={"pwd"}
													className="input sz-md variant-mixed"
												/>
											</FormControl>
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>

							<Button className="w-full">Sign In</Button>
						</div>
					</div>

					<div className="rounded-(--radius) border bg-muted p-3">
						<p className="text-center text-accent-foreground text-sm">
							Don't have an account ?
							<Button asChild variant="link" className="px-2">
								<Link href="/auth/sign-up">Create account</Link>
							</Button>
						</p>
					</div>
				</form>
			</Form>
		</section>
	);
}
