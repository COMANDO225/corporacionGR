"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLoginSchema, AuthLoginType } from "@/schemas/auth.schema";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "@/actions/user.action";
import { useRouter } from "next/navigation";

interface AuthFormProps {
	type: "sign-in" | "sign-up";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
	const router = useRouter();
	const [, setIsSubmitting] = useState<boolean>(false);
	const [viewPassword, setViewPassword] = useState<boolean>(false);

	const form = useForm<AuthLoginType>({
		resolver: zodResolver(AuthLoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: AuthLoginType) {
		setIsSubmitting(true);

		try {
			router.push("/");
		} catch (error) {
			console.error("Error en la autenticación:", error);

			// Mensaje genérico en caso de falla inesperada
			form.setError("root", {
				type: "manual",
				message: "Error inesperado al intentar iniciar sesión.",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<h2 className="h1 mb-6">
				{type === "sign-in" ? "Iniciar Sesión" : "Registrarse"}
			</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full max-w-md"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										className={`${
											form.formState.errors.email
												? "border-red-500"
												: ""
										}`}
										autoComplete="off"
										placeholder=""
										{...field}
									/>
								</FormControl>
								<FormMessage className="shad-form-message" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<div className="relative flex justify-center items-center">
										<Input
											type={
												viewPassword
													? "text"
													: "password"
											}
											className={`${
												form.formState.errors.password
													? "border-red-500"
													: ""
											}`}
											placeholder=""
											{...field}
										/>
										<button
											role="button"
											type="button"
											className="absolute right-2 w-[32px] h-[32px] hover:bg-gray-100 flex justify-center items-center rounded-full"
											onClick={() => {
												setViewPassword(!viewPassword);
											}}
										>
											{viewPassword ? (
												<FaEyeSlash size={22.5} />
											) : (
												<FaEye size={20} />
											)}
										</button>
									</div>
								</FormControl>
								<FormMessage className="shad-form-message" />
							</FormItem>
						)}
					/>
					<Button
						className="w-full py-5 md:py-6 rounded-full bg-primary hover:bg-primary-600"
						type="submit"
					>
						INGRESAR
					</Button>
				</form>
			</Form>
		</>
	);
};

export default AuthForm;
