import { z } from "zod";

export const AuthLoginSchema = z.object({
	email: z.string().email({
		message: "Debe ser un email valido",
	}),
	password: z.string({
		message: "La contraseña es requerida",
	}),
});

export type AuthLoginType = z.infer<typeof AuthLoginSchema>;
