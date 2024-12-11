"use client";

import { useCrearBonoStore } from "@/atoms/ui/crear-bono.atom";
import NextModal from "@/components/ui/NextModal";
import { marcas, proveedores } from "@/data";
import {
	Autocomplete,
	AutocompleteItem,
	Button,
	Input,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { Plus, Search } from "lucide-react";
import { FC, useState, useEffect, Fragment } from "react";
import FormularioCrearBono from "./FormularioCrearBono";

interface FiltrosBonosArticleProps {}

const FiltrosBonosArticle: FC<FiltrosBonosArticleProps> = ({}) => {
	const [selectedProveedor, setSelectedProveedor] = useState<number | null>(
		null
	);
	const [filteredMarcas, setFilteredMarcas] = useState(marcas);
	const [selectedMarca, setSelectedMarca] = useState<number | null>(null);

	const { isOpenModalBono, onCloseModalBono, onOpenModalBono } =
		useCrearBonoStore();

	useEffect(() => {
		if (selectedProveedor === null) {
			setFilteredMarcas(marcas);
		} else {
			const proveedor = proveedores.find(
				(p) => p.id === Number(selectedProveedor)
			);
			if (proveedor) {
				setFilteredMarcas(
					marcas.filter((marca) =>
						proveedor.marcas.includes(marca.id)
					)
				);
			}
		}
	}, [selectedProveedor]);

	const handleProveedorChange = (id: number) => {
		setSelectedProveedor(id);
		setSelectedMarca(null);
	};

	const handleMarcaChange = (id: number) => {
		setSelectedMarca(id);
	};

	return (
		<Fragment>
			<div className='flex items-end justify-between gap-4'>
				<div className='flex gap-2 items-end'>
					<Autocomplete
						name='proveedor'
						placeholder='Seleccione'
						variant='bordered'
						defaultItems={proveedores}
						labelPlacement='outside'
						label='Proveedor'
						selectedKey={selectedProveedor}
						className='max-w-[250px]'
						listboxProps={{
							emptyContent: "No se encontraron proveedores.",
						}}
						onSelectionChange={(value) =>
							handleProveedorChange(value as number)
						}
					>
						{({ id, nombre }) => (
							<AutocompleteItem key={id}>
								{nombre}
							</AutocompleteItem>
						)}
					</Autocomplete>
					<Autocomplete
						name='marca'
						placeholder='Seleccione'
						variant='bordered'
						defaultItems={filteredMarcas}
						labelPlacement='outside'
						label='Marca'
						selectedKey={selectedMarca}
						className='max-w-[210px]'
						listboxProps={{
							emptyContent: "No se encontraron marcas.",
						}}
						onSelectionChange={(value) =>
							handleMarcaChange(value as number)
						}
					>
						{({ id, nombre }) => (
							<AutocompleteItem key={id}>
								{nombre}
							</AutocompleteItem>
						)}
					</Autocomplete>
					<Select
						label='Estado'
						variant='bordered'
						labelPlacement='outside'
						placeholder='Todos'
						defaultSelectedKeys={["todos"]}
						className='max-w-[210px]'
						classNames={{
							value: "text-black",
						}}
					>
						<SelectItem key={"todos"}>Todos</SelectItem>
						<SelectItem key={"vigentes"}>Vigentes</SelectItem>
						<SelectItem key={"vencidos"}>No vigentes</SelectItem>
					</Select>
				</div>
				<div className='flex gap-2'>
					<Input
						type='search'
						placeholder='Buscar bono'
						variant='bordered'
						className='max-w-[210px]'
						startContent={
							<Search size={20} className='text-default-500' />
						}
					/>
					<div className=''>
						<Button
							type='button'
							variant='solid'
							color='primary'
							startContent={<Plus />}
							onClick={onOpenModalBono}
						>
							Crear bono
						</Button>
					</div>
				</div>
			</div>
			<NextModal
				onClose={onCloseModalBono}
				isOpen={isOpenModalBono}
				onOpenChange={onCloseModalBono}
				titulo='Agregar nuevo registro'
				size='4xl'
				backdrop='blur'
				scrollBehavior='outside'
			>
				<FormularioCrearBono />
			</NextModal>
		</Fragment>
	);
};

export default FiltrosBonosArticle;
