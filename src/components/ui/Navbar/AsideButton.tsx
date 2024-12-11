"use client";
import { Button } from "@nextui-org/react";
import { FC, Fragment } from "react";
import { motion } from "framer-motion";
import { useAsideMobileStore, useMenuLateralStore } from "@/atoms";

interface AsideButtonProps {}

const AsideButton: FC<AsideButtonProps> = ({}) => {
	const { isAsideMenuOpen, toggleAsideMenu } = useMenuLateralStore();
	const { isAsideMobileOpen, toggleAsideMobile } = useAsideMobileStore();

	const topLineVariants = {
		initial: { y: 0, rotate: 0, width: 24 },
		animated: { y: -8 },
		active: { y: 4, x: 6, rotate: -45, width: 12 },
	};

	const middleLineVariants = {
		initial: { opacity: 1, width: 24 },
		animated: { opacity: 1 },
		active: { opacity: 1, width: 20 },
	};

	const bottomLineVariants = {
		initial: { y: 0, rotate: 0, width: 24 },
		animated: { y: 8 },
		active: { y: -4, x: 6, rotate: 45, width: 12 },
	};

	// función para seleccionar la variante correcta basada en el índice de la linea
	const getVariants = (index: number) => {
		switch (index) {
			case 0:
				return topLineVariants;
			case 1:
				return middleLineVariants;
			case 2:
				return bottomLineVariants;
			default:
				return {};
		}
	};

	const topLineVariantsMobile = {
		initial: { y: 0, rotate: 0, width: 20 },
		animated: { y: -6 },
		active: { y: 0, x: 0, rotate: -45, width: 20 },
	};

	const middleLineVariantsMobile = {
		initial: { opacity: 1, width: 20 },
		animated: { opacity: 1 },
		active: { opacity: 1, width: 0 },
	};

	const bottomLineVariantsMobile = {
		initial: { y: 0, rotate: 0, width: 20 },
		animated: { y: 6 },
		active: { y: 0, x: 0, rotate: 45, width: 20 },
	};

	const getVariantsMobile = (index: number) => {
		switch (index) {
			case 0:
				return topLineVariantsMobile;
			case 1:
				return middleLineVariantsMobile;
			case 2:
				return bottomLineVariantsMobile;
			default:
				return {};
		}
	};

	return (
		<Fragment>
			{/* mobile btn */}
			<Button
				variant="solid"
				color="primary"
				className="flex md:hidden p-0 w-10 h-10 min-w-0 relative items-center justify-center hover:bg-[rgba(0,0,0,0.25)] hover:!opacity-100"
				onClick={() => {
					toggleAsideMobile();
					console.log(isAsideMobileOpen ? "abierto" : "cerrado");
				}}
			>
				{[0, 1, 2].map((index) => (
					<motion.div
						key={index}
						className="absolute h-0.5 rounded-2xl bg-white"
						variants={getVariantsMobile(index)}
						initial="initial"
						animate={isAsideMobileOpen ? "active" : "animated"}
					/>
				))}
			</Button>
			{/* desktop btn */}
			<Button
				variant="solid"
				color="primary"
				className="hidden p-0 w-10 h-10 min-w-0 relative md:flex items-center justify-center hover:bg-[rgba(0,0,0,0.25)] hover:!opacity-100"
				onClick={() => {
					toggleAsideMenu();
					console.log(isAsideMenuOpen ? "abierto" : "cerrado");
				}}
			>
				{[0, 1, 2].map((index) => (
					<motion.div
						key={index}
						className="absolute h-0.5 rounded-2xl bg-white"
						variants={getVariants(index)}
						initial="initial"
						animate={!isAsideMenuOpen ? "active" : "animated"}
					/>
				))}
			</Button>
		</Fragment>
	);
};

export default AsideButton;
