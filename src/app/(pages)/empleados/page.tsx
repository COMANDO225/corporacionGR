import { SectionPage } from "@/components/ui/SectionPage";
import { FC } from "react";

interface EmpleadosPageProps {}

const EmpleadosPage: FC<EmpleadosPageProps> = ({}) => {
	return (
		<SectionPage
			title="Gestionar Empleados"
			subtitle="Visualiza y gestiona los empleados de la empresa"
		>
			EmpleadosPage
		</SectionPage>
	);
};

export default EmpleadosPage;
