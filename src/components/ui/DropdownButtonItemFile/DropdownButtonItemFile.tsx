"use client";

import { EllipsisVertical, Pencil, Trash2, UserPlus } from "lucide-react";
import { FC, Fragment, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NextModal from "../NextModal";

interface DropdownButtonItemFileProps {
	id: number;
	title: string;
}

const EditarFile = ({ cerrarModal }: { cerrarModal: () => void }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí puedes manejar la lógica para guardar los datos
		console.log("Nuevo nombre:", name);
		console.log("Descripción:", description);
		cerrarModal(); // Cerrar el modal después de guardar
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			{/* Título */}
			<h2 className="text-lg font-semibold">Editar archivo</h2>

			{/* Campo para nombre */}
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="text-sm font-medium">
					Nuevo nombre
				</label>
				<input
					id="name"
					type="text"
					placeholder="Ingresa el nuevo nombre"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>

			{/* Campo para descripción */}
			<div className="flex flex-col gap-2">
				<label htmlFor="description" className="text-sm font-medium">
					Descripción
				</label>
				<textarea
					id="description"
					placeholder="Agrega una descripción (opcional)"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					rows={3}
				/>
			</div>

			{/* Botones */}
			<div className="flex justify-end gap-2">
				<button
					type="button"
					className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
					onClick={cerrarModal}
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
				>
					Guardar
				</button>
			</div>
		</form>
	);
};

const CompartirFile = ({ cerrarModal }: { cerrarModal: () => void }) => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(email);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			{/* Título */}
			<h2 className="text-lg font-semibold">Compartir archivo</h2>

			{/* Input para correo */}
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="text-sm font-medium">
					Correo electrónico
				</label>
				<input
					id="email"
					type="email"
					placeholder="Ingresa el correo"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>

			{/* Botones */}
			<div className="flex justify-end gap-2">
				<button
					type="button"
					className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
					onClick={cerrarModal}
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
				>
					Enviar
				</button>
			</div>
		</form>
	);
};

const EliminarFile = () => {
	return <p>Eliminar archivo</p>;
};

const options = [
	{
		id: 1,
		title: "Cambiar Nombre",
		icon: <Pencil size={18} />,
		component: EditarFile,
	},
	{
		id: 2,
		title: "Compartir",
		icon: <UserPlus size={18} />,
		component: CompartirFile,
	},
	{
		id: 3,
		title: "Eliminar",
		icon: <Trash2 size={18} />,
		component: EliminarFile,
	},
];

const DropdownButtonItemFile: FC<DropdownButtonItemFileProps> = ({
	id,
	title,
}) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [currentComponent, setCurrentComponent] =
		useState<JSX.Element | null>(null);

	const handleOptionClick = (option: any) => {
		// Pasar cerrarModal como prop al componente actual
		const Component = option.component;
		setCurrentComponent(<Component cerrarModal={cerrarModal} />);
		setIsOpenModal(true);
	};

	const cerrarModal = () => {
		setIsOpenModal(false);
	};

	return (
		<Fragment>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="w-[30px] h-[30px] flex justify-center items-center bg-gray-300 rounded-full">
						<EllipsisVertical size={18} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>
						<p className="truncate">{title}</p>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						{options.map((option) => {
							if (option.id === 3) {
								return (
									<>
										<DropdownMenuSeparator />
										<DropdownMenuItem
											key={option.id}
											onClick={() => {
												handleOptionClick(option);
											}}
										>
											{option.icon}
											<span className="ml-2">
												{option.title}
											</span>
										</DropdownMenuItem>
									</>
								);
							}
							return (
								<DropdownMenuItem
									key={option.id}
									onClick={() => handleOptionClick(option)}
								>
									{option.icon}
									<span className="ml-2">{option.title}</span>
								</DropdownMenuItem>
							);
						})}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>

			<NextModal
				onClose={() => setIsOpenModal(false)}
				isOpen={isOpenModal}
				onOpenChange={() => setIsOpenModal(false)}
				titulo={title}
				size="md"
				backdrop="blur"
				// scrollBehavior="outside"
			>
				{currentComponent}
			</NextModal>
		</Fragment>
	);
};

export default DropdownButtonItemFile;
