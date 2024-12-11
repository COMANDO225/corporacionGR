import AuthForm from "@/components/ui/forms/AuthForm";
import React from "react";

const fetchUser = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(res.json());

		if (!res.ok) {
			return null;
		}

		const data = await res.json();
		console.log(data);
		return data.data;
	} catch (error) {
		console.error("Error al obtener el usuario:", error);
		return null;
	}
};

const LoginPage = async () => {
	const usuario = await fetchUser();
	console.log("usuario", usuario);
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<AuthForm type="sign-in" />
		</div>
	);
};

export default LoginPage;
