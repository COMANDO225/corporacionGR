import UserMenu from "./UserMenu";
import { NAVBAR_TITLE } from "@/config";
import Link from "next/link";
import AsideButton from "./AsideButton";

const Navbar = () => {
	const TitleComponent = () => {
		return (
			<Link href='/'>
				<div
					className='uppercase text-sm md:text-base lg:text-lg font-semibold w-max'
					role='heading'
					aria-level={1}
				>
					{NAVBAR_TITLE}
				</div>
			</Link>
		);
	};

	return (
		<div className='sticky top-0 z-50'>
			<div
				className='wrapper h-[var(--h-nav)] bg-primary'
				aria-label='Barra de navegación principal'
			>
				<div className='h-full w-full overflow-hidden flex justify-between items-center  text-white'>
					<div className='flex gap-1 sm:gap-3 items-center'>
						<AsideButton />
						<div className='hidden md:block'>
							<TitleComponent />
						</div>
					</div>
					<div className=''>
						<div className='md:hidden'>
							<TitleComponent />
						</div>
						<div className='hidden md:block'>
							<UserMenu />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
