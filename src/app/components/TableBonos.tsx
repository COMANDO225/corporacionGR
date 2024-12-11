"use client";

import { bonos as bonoData, bonosTableColumns } from "@/data";
import { getMarcaNombre, getProveedorNombre } from "@/utils/getNames";
import { Switch } from "@nextui-org/react";
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/table";
import { FC, useState } from "react";

interface TableBonosProps {}

const TableBonos: FC<TableBonosProps> = ({}) => {
	const [bonos, setBonos] = useState(bonoData);
	return (
		<div className='grid h-full overflow-hidden'>
			<Table
				aria-label='Example table with dynamic content'
				removeWrapper
				color='secondary'
				isHeaderSticky
				classNames={{
					base: "overflow-auto",
					table: "min-h-[420px]",
				}}
			>
				<TableHeader columns={bonosTableColumns}>
					{(column) => (
						<TableColumn key={column.id}>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>
				<TableBody emptyContent='No se encontraron bonos.'>
					{bonos.map((bono) => (
						<TableRow
							key={bono.id}
							className='hover:bg-default-100 !rounded-lg !overflow-hidden'
						>
							<TableCell>
								<Switch
									isSelected={bono.videncia}
									onChange={() => {
										setBonos((prev) => {
											return prev.map((b) => {
												if (b.id === bono.id) {
													return {
														...b,
														videncia: !b.videncia,
													};
												}
												return b;
											});
										});
									}}
								/>
							</TableCell>
							<TableCell>
								{getProveedorNombre(bono.proveedor)}
							</TableCell>
							<TableCell>{getMarcaNombre(bono.marca)}</TableCell>
							<TableCell>{bono.modelo}</TableCell>
							<TableCell>{bono.nombreBono}</TableCell>
							<TableCell>{bono.fechaInicio}</TableCell>
							<TableCell>{bono.fechaFin}</TableCell>
							<TableCell>
								<button>Editar</button>
								<button>Eliminar</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default TableBonos;
