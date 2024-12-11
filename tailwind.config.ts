import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: {
				primary: {
					DEFAULT: "#0047BA",
				},
				secondary: {
					DEFAULT: "#3b82f6",
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		nextui({
			layout: {
				radius: {
					small: "4px", // rounded-small
					medium: "6px", // rounded-medium
					large: "8px", // rounded-large
				},
				borderWidth: {
					small: "1px", // border-small
					medium: "1px", // border-medium
					large: "2px", // border-large
				},
			},
		}),
	],
} satisfies Config;

export default config;
