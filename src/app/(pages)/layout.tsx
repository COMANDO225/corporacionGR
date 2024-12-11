import { MasterLayout } from "@/components/layouts";
import { FC } from "react";

interface layoutProps {
	children: React.ReactNode;
}

const PagesLayout: FC<layoutProps> = ({ children }) => {
	return <MasterLayout>{children}</MasterLayout>;
};

export default PagesLayout;
