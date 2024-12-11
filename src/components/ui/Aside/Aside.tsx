"use client";

import { cn } from "@/lib/utils";
import { PanelsTopLeft } from "lucide-react";
import { FC, Fragment } from "react";
import AsideItem from "./AsideItem";
import { useAsideMobileStore, useMenuLateralStore } from "@/atoms";
import { TooltipProvider } from "../tooltip";
import { Sheet, SheetContent } from "../sheet";
import AsideButton from "../Navbar/AsideButton";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { FaRegFile, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

interface AsideProps {}

export type AsideItemType = {
	id: number;
	title: string;
	icon?: JSX.Element;
	url: string;
};

export const menu: AsideItemType[] = [
	{
		id: 1,
		title: "Documentos",
		icon: <FaRegFile size={22} />,
		url: "/",
	},
	{
		id: 2,
		title: "Empleados",
		icon: <IoMdPerson size={22} />,
		url: "/empleados",
	},
	{
		id: 3,
		title: "Clientes",
		icon: <FaUsers size={22} />,
		url: "/clientes",
	},
	{
		id: 4,
		title: "Proyectos",
		icon: <FaProjectDiagram size={22} />,
		url: "/proyectos",
	},
];

const Aside: FC<AsideProps> = ({}) => {
	const { isAsideMenuOpen } = useMenuLateralStore();

	return (
		<Fragment>
			<Desktop isAsideMenuOpen={isAsideMenuOpen} menu={menu} />
			<Mobile menu={menu} />
		</Fragment>
	);
};

interface MenuListProps {
	isAsideMenuOpen?: boolean;
	menu: AsideItemType[];
}
const Desktop = ({ menu, isAsideMenuOpen }: MenuListProps) => {
	return (
		<aside
			data-collapse={isAsideMenuOpen ? false : true}
			aria-label="aside"
			aria-roledescription="this is the aside component of the app"
			className={cn(
				"bg-[var(--bg-aside)] w-[300px] sticky z-50",
				"top-[var(--h-nav)] md:top-[var(--h-nav)]",
				"h-[calc(100svh-var(--h-nav))] md:h-[calc(100svh-var(--h-nav))]",
				"pl-[3%] p-3 lg:pl-[12px]",
				"hidden md:block",
				"transition-all duration-150",
				"data-[collapse='true']:w-[82px]"
			)}
		>
			<ul>
				<TooltipProvider delayDuration={0}>
					{menu.map((item) => (
						<li key={item.id}>
							<AsideItem
								item={item}
								collapse={isAsideMenuOpen!}
							/>
						</li>
					))}
				</TooltipProvider>
			</ul>
		</aside>
	);
};

const Mobile = ({ menu }: MenuListProps) => {
	const { isAsideMobileOpen, onOpenAsideMobile, onCloseAsideMobile } =
		useAsideMobileStore();

	return (
		<Sheet
			open={isAsideMobileOpen}
			onOpenChange={(open) => {
				open ? onOpenAsideMobile() : onCloseAsideMobile();
			}}
		>
			<SheetContent side={"left"} className="border-none">
				<div className="grid grid-rows-[auto_1fr_auto] h-full">
					<header className="h-16 bg-primary flex items-center w-full justify-between px-4">
						<h2 className="uppercase font-semibold text-lg w-max text-white">
							Menú
						</h2>
						<AsideButton />
					</header>
					<div className="overflow-y-auto">
						{menu.map((item) => (
							<AsideMobileItem
								key={item.id}
								item={item}
								onClose={onCloseAsideMobile}
							/>
						))}
					</div>
					<div className="border-t">
						<div className="p-4 px-3">
							{/* avatar y su nombre al lado buena estructura con tailwind */}
							<button className="flex items-center hover:bg-gray-50 py-4 px-3 w-full rounded-lg">
								<Avatar
									isBordered
									className="w-[36px] h-[36px]"
								/>
								<div className="ml-4 text-start">
									<h3 className="text-sm font-semibold">
										Anderson Almeyda
									</h3>
									<p className="text-xs text-gray-500">
										Fullstack
									</p>
								</div>
							</button>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

type AsideMobileItemProps = {
	item: AsideItemType;
	onClose: () => void;
};

export const AsideMobileItem = ({ item, onClose }: AsideMobileItemProps) => {
	return (
		<Link
			href={item.url}
			onClick={() => {
				onClose();
			}}
			className={cn(
				"w-full h-14 py-2 flex items-center",
				"px-4 text-sm font-medium",
				"border-b border-[#E5E5E5] last:border-none"
			)}
		>
			{item.icon}
			<span className="ml-4">{item.title}</span>
		</Link>
	);
};

export default Aside;
