"use client";

import { Avatar, Badge, Button } from "@nextui-org/react";
import { Fragment } from "react";

const UserMenu = () => {
	return (
		<Fragment>
			<Button
				className='flex items-center gap-2 hover:bg-[rgba(0,0,0,0.25)] min-h-full max-h-full p-2 py-1 h-full rounded-[48px] pl-4 hover:!opacity-100'
				aria-label='Menú de usuario'
				title='Menú de usuario'
				variant='solid'
				color='primary'
				disableRipple
			>
				<div className='flex flex-col justify-end text-end'>
					<span className='text-[13px]'>Anderson A.</span>
					<span className='text-[12px] font-light'>FullStack</span>
				</div>
				<Badge
					content=''
					color='success'
					shape='circle'
					placement='bottom-right'
					className='hidden'
					size='sm'
				>
					<Avatar
						isBordered
						color='primary'
						className='w-[34px] h-[34px]'
					/>
				</Badge>
			</Button>
		</Fragment>
	);
};

export default UserMenu;
