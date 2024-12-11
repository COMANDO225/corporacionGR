import { FC } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useAsideMobileStore } from "@/store";
import AsideMenu from "../Navbar/AsideMenu";
import { MenuItemProps } from "./Aside";
import { cn } from "@/lib/utils";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

interface AsideMobileProps {
	menu: MenuItemProps[];
}

const AsideMobile: FC<AsideMobileProps> = ({ menu }) => {
	const { isAsideMobileOpen, onOpenAsideMobile, onCloseAsideMobile } =
		useAsideMobileStore();

	return (
		<Sheet
			open={isAsideMobileOpen}
			onOpenChange={(open) => {
				open ? onOpenAsideMobile() : onCloseAsideMobile();
			}}
		>
			<SheetContent side={"left"} className='border-none'>
				<div className='grid grid-rows-[auto_1fr_auto] h-full'>
					<header className='h-16 bg-primary flex items-center w-full justify-between px-4'>
						<h2 className='uppercase font-semibold text-lg w-max text-white'>
							Menú
						</h2>
						<AsideMenu />
					</header>
					<div className='overflow-y-auto'>
						{menu.map((item) => (
							<AsideMobileItem
								key={item.id}
								item={item}
								onClose={onCloseAsideMobile}
							/>
						))}
					</div>
					<div className='border-t'>
						<div className='p-4 px-3'>
							{/* avatar y su nombre al lado buena estructura con tailwind */}
							<button className='flex items-center hover:bg-gray-50 py-4 px-3 w-full rounded-lg'>
								<Avatar
									isBordered
									className='w-[36px] h-[36px]'
								/>
								<div className='ml-4 text-start'>
									<h3 className='text-sm font-semibold'>
										Anderson Almeyda
									</h3>
									<p className='text-xs text-gray-500'>
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
	item: MenuItemProps;
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
			<span className='ml-4'>{item.title}</span>
		</Link>
	);
};

export default AsideMobile;
