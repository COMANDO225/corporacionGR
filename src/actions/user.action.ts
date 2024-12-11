"use server";

import { redirect } from "next/navigation";

interface SignInData {
	email: string;
	password: string;
}

export async function signIn(data: SignInData) {
	return {};
}

export async function fetchUser() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`);
	const json = await res.json();

	if (!res.ok) {
		redirect("/login");
	}

	return json.data;
}
