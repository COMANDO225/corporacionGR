"use client";

import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { AsideItemType } from "./Aside";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

interface AsideItemProps {
	item: AsideItemType;
	collapse: boolean;
}

const AsideItem: FC<AsideItemProps> = ({ item, collapse }) => {
	const pathname = usePathname();
	const isActive = pathname === item.url;

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					href={item.url}
					aria-current={isActive ? "page" : undefined}
					aria-label={item.title + " link" || "link"}
					aria-roledescription={item.title + " link" || "link"}
					role="link"
					className={cn(
						"w-full flex justify-between items-center gap-2",
						"h-14 rounded-full px-4 text-[#313740]",
						"bg-transparent hover:bg-[rgba(0,0,0,0.035)]",
						"data-[active='true']:bg-white data-[active='true']:text-[#193E7A] data-[active='true']:shadow",
						"data-[collapse='true']:flex data-[collapse='true']:gap-0 data-[collapse='true']:rounded-lg"
					)}
					data-active={isActive ? true : false}
					data-collapse={!collapse ? true : false}
				>
					<div
						className={cn(
							"grid grid-cols-[auto_1fr] items-center h-full gap-2",
							"data-[collapse='true']:grid-cols-[auto] data-[collapse='true']:gap-0"
						)}
						data-collapse={!collapse ? true : false}
					>
						<div
							className={cn(
								"w-7 h-7 flex gap-0 justify-center items-center"
							)}
							data-collapse={!collapse ? true : false}
						>
							{item.icon}
						</div>

						{!collapse ? null : (
							<span
								className={cn(
									"font-medium max-w-[180px] text-sm truncate"
								)}
							>
								{item.title}
							</span>
						)}
					</div>
					{!collapse ? null : (
						<div className="hidden md:block">
							<ChevronRight />
						</div>
					)}
				</Link>
			</TooltipTrigger>

			<TooltipContent
				className={cn(
					"bg-foreground z-[200] text-[15px]",
					!collapse ? "block" : "hidden"
				)}
				side="right"
			>
				{item.title}
			</TooltipContent>
		</Tooltip>
	);
};

export default AsideItem;
