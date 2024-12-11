import { FC, Fragment } from "react";
import { APP_ID_TAG } from "@/config";
import { Aside, Navbar } from "../ui";
import { fetchUser } from "@/actions/user.action";

interface MasterLayoutProps {
	children: React.ReactNode;
}

const MasterLayout: FC<MasterLayoutProps> = ({ children }) => {
	// const usuario = await fetchUser();
	// console.log("usuario", usuario);
	return (
		<Fragment>
			<Navbar />
			<div
				id={APP_ID_TAG ? `${APP_ID_TAG}__app` : "administrador__app"}
				className="w-full h-full grid md:grid-cols-[auto_1fr]"
			>
				<Aside />
				<main>{children}</main>
			</div>
		</Fragment>
	);
};

export default MasterLayout;
