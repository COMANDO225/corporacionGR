"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// revalidate path next.js

interface SignInData {
	email: string;
	password: string;
}

export async function signIn({ email, password }: SignInData) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include", // Necesario para incluir cookies
		body: JSON.stringify({ email, password }),
	});
	const json = await res.json();
	console.log(json);

	if (!res.ok) {
		throw new Error(json.message);
	}

	return json;
}

export async function fetchUser() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`);
	const json = await res.json();

	if (!res.ok) {
		redirect("/login");
	}

	return json.data;
}
