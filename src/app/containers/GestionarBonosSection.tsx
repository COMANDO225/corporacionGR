import { FC } from "react";
import FiltrosBonosArticle from "../components/FiltrosBonosArticle";
import TableBonos from "../components/TableBonos";

interface GestionarBonosSectionProps {}

const GestionarBonosSection: FC<GestionarBonosSectionProps> = ({}) => {
	return (
		<div className='grid h-full grid-rows-[auto_1fr] gap-4 overflow-hidden'>
			<FiltrosBonosArticle />
			<TableBonos />
		</div>
	);
};

export default GestionarBonosSection;
