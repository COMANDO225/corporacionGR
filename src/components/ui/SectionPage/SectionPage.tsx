import { cn } from "@/lib/utils";
import { FC } from "react";

interface SectionPageProps {
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
	className?: string;
	classNames?: {
		container?: string;
		section?: string;
		title?: string;
		subtitle?: string;
	};
}

const SectionPage: FC<SectionPageProps> = ({
	title,
	subtitle,
	children,
	className,
	classNames,
}) => {
	return (
		<section
			className={cn("relative p-4 md:p-[1rem_28px]", classNames?.section)}
		>
			{(title || subtitle) && (
				<div
					className={cn(
						"mb-8",
						!subtitle && "mb-4",
						className,
						classNames?.container
					)}
				>
					{title && (
						<h2
							className={cn(
								"text text-primary font-bold leading-8",
								classNames?.title
							)}
						>
							{title}
						</h2>
					)}
					{subtitle && (
						<p
							className={cn(
								"text-[#606060]",
								classNames?.subtitle
							)}
						>
							{subtitle}
						</p>
					)}
				</div>
			)}
			{children}
		</section>
	);
};

export default SectionPage;
