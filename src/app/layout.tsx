import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UIProvider from "@/providers/UIProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body id="__almeyda" className={inter.className}>
				<UIProvider>{children}</UIProvider>
			</body>
		</html>
	);
}