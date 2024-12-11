"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ToastContainer, ToastContainerProps } from "react-toastify";

interface UIProviderProps {
	children: React.ReactNode;
}

const toastConfig: ToastContainerProps = {
	position: "bottom-right",
	autoClose: 2500,
	hideProgressBar: false,
	newestOnTop: false,
	closeOnClick: true,
	draggable: true,
	theme: "colored",
	stacked: true,
};

const UIProvider: FC<UIProviderProps> = ({ children }) => {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			{children}
			<ToastContainer {...toastConfig} />
		</NextUIProvider>
	);
};

export default UIProvider;
