"use client";

import { useCrearBonoStore } from "@/atoms/ui/crear-bono.atom";
import { marcas, proveedores } from "@/data";
import {
	Autocomplete,
	AutocompleteItem,
	Button,
	DatePicker,
	Input,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudUpload, Trash2 } from "lucide-react";

interface FormularioCrearBonoProps {}

interface Bono {
	nombre: string;
	monto: number | null;
}

const FormularioCrearBono: FC<FormularioCrearBonoProps> = ({}) => {
	const [selectedProveedor, setSelectedProveedor] = useState<number | null>(
		null
	);
	const [filteredMarcas, setFilteredMarcas] = useState(marcas);
	const [selectedMarca, setSelectedMarca] = useState<number | null>(null);
	const [bonos, setBonos] = useState<Bono[]>([]);
	const { onCloseModalBono } = useCrearBonoStore();
	const [pdfFile, setPdfFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setPdfFile(event.target.files[0]);
		}
	};

	const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (event.dataTransfer.files && event.dataTransfer.files[0]) {
			setPdfFile(event.dataTransfer.files[0]);
			console.log(event.dataTransfer.files[0]);
		}
	};

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

	const handleBonoChange = (index: number, field: string, value: any) => {
		if (!bonos) return;
		const newBonos = [...bonos];
		newBonos[index] = { ...newBonos[index], [field]: value };
		setBonos(newBonos);
	};

	const handleAddBono = () => {
		if (!bonos) return;
		setBonos([...bonos, { nombre: "", monto: 0 }]);
	};

	const handleRemoveBono = (index: number) => {
		if (!bonos) return;
		const newBonos = bonos.filter((_, i) => i !== index);
		setBonos(newBonos);
	};

	return (
		<div className="grid w-full md:grid-cols-2 gap-8 px-4 py-2">
			<div className="">
				<div
					className="relative w-full h-full md:h-[422px] border-dashed border-2 rounded-lg hover:bg-default-50 transition-all"
					onDrop={handleFileDrop}
					onDragOver={(e) => e.preventDefault()}
				>
					<input
						type="file"
						accept="application/pdf"
						className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
						onChange={handleFileChange}
					/>

					<div className="flex py-8 flex-col w-full h-full items-center justify-center text-default-400">
						<CloudUpload className="w-16 h-16" strokeWidth={1.75} />
						<div className="text-center">
							<p className="font-medium">
								Click para subir un archivo
							</p>
							<span className="font-normal text-sm opacity-50">
								o arrastre y suelte
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<Tabs defaultValue="detalle" className="w-full">
					<TabsList className="grid w-full grid-cols-2 rounded-full">
						<TabsTrigger className="rounded-full" value="detalle">
							Detalle
						</TabsTrigger>
						<TabsTrigger
							className="rounded-full"
							value="observacion"
						>
							Observación
						</TabsTrigger>
					</TabsList>
					<TabsContent value="detalle" className="pt-4">
						<form className="grid gap-4">
							<Autocomplete
								name="proveedor"
								placeholder="Seleccione"
								variant="bordered"
								defaultItems={proveedores}
								labelPlacement="outside"
								label="Proveedor"
								selectedKey={selectedProveedor}
								listboxProps={{
									emptyContent:
										"No se encontraron proveedores.",
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
							<div className="grid items-start grid-cols-2 gap-4">
								<Autocomplete
									name="marca"
									placeholder="Seleccione"
									variant="bordered"
									defaultItems={filteredMarcas}
									labelPlacement="outside"
									label="Marca"
									selectedKey={selectedMarca}
									listboxProps={{
										emptyContent:
											"No se encontraron marcas.",
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
									label="Tipo de devolución"
									variant="bordered"
									labelPlacement="outside"
									placeholder="Seleccione"
									classNames={{
										value: "",
									}}
								>
									<SelectItem key={"uno"}>Tipo 1</SelectItem>
									<SelectItem key={"dos"}>Tipo 2</SelectItem>
								</Select>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<DatePicker
									label="Fecha de inicio"
									variant="bordered"
									labelPlacement="outside"
								/>
								<DatePicker
									label="Fecha de fin"
									variant="bordered"
									labelPlacement="outside"
								/>
							</div>
							{bonos?.map((bono, index) => (
								<div
									key={index}
									className="grid grid-cols-2 gap-4 items-center"
								>
									<Input
										placeholder="Ingrese"
										label={
											index > 0
												? `Bono ${index + 1}`
												: "Bono"
										}
										labelPlacement="outside"
										variant="bordered"
										value={bono.nombre}
										onValueChange={(value) =>
											handleBonoChange(
												index,
												"nombre",
												value
											)
										}
									/>
									<div className="grid items-end grid-cols-[1fr_auto] gap-2">
										<Input
											placeholder="Ingrese"
											label="Monto"
											labelPlacement="outside"
											variant="bordered"
											value={
												bono.monto
													? bono.monto.toString()
													: ""
											}
											onValueChange={(value) =>
												handleBonoChange(
													index,
													"monto",
													value
												)
											}
										/>

										<Button
											aria-label="Eliminar bono"
											type="button"
											role="button"
											variant="bordered"
											onClick={() =>
												handleRemoveBono(index)
											}
											className="w-10 h-10 min-h-10 p-0 min-w-[52px]"
										>
											<Trash2 size={18} />
										</Button>
									</div>
								</div>
							))}
							<Button
								type="button"
								variant="bordered"
								className="bg-[#F5F5F5] text-[#313740] hover:bg-[#E0E0E0] hover:text-[#313740]"
								onClick={handleAddBono}
							>
								Agregar bono
							</Button>
							<div className="grid grid-cols-2 gap-4">
								<Button
									type="button"
									color="primary"
									variant="bordered"
									onClick={onCloseModalBono}
								>
									Cancelar
								</Button>
								<Button
									type="button"
									color="primary"
									variant="solid"
								>
									Registrar bono
								</Button>
							</div>
						</form>
					</TabsContent>
					<TabsContent value="observacion">
						<textarea
							className="w-full h-32 p-2 border border-gray-300 rounded-lg"
							placeholder="Escriba una observación"
						></textarea>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default FormularioCrearBono;
