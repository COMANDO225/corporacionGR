import { FC } from "react";

interface layoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<layoutProps> = ({ children }) => {
	return (
		<div className="bg-primary-200 grid grid-cols-1 grid-rows-2 md:grid-cols-[1fr_40%] md:grid-rows-1 min-h-screen">
			<section className="p-4 md:p-10">
				<div className="space-y-5 justify-center text-center flex items-center h-full flex-col">
					<h1 className="h1 mt-10 md:mt-0">Sistema Proyecto G&R</h1>
					<p className="body-1">
						¡Bienvenido! Inicia sesión para acceder al sistema.
					</p>
				</div>
			</section>
			<div className="bg-white rounded-t-2xl md:rounded-none">
				<div className="p-4 pt-5 md:p-10 h-full">{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
