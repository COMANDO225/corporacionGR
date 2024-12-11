import { SectionPage } from "@/components/ui/SectionPage";
import { FC } from "react";

interface ClientesPageProps {}

const ClientesPage: FC<ClientesPageProps> = ({}) => {
	return (
		<SectionPage
			title="Gestionar Clientes"
			subtitle="Visualiza y gestiona los clientes de la empresa"
		>
			ClientesPage
		</SectionPage>
	);
};

export default ClientesPage;
