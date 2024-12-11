import { proveedores, marcas } from "@/data";

export const getProveedorNombre = (id: number) => {
	const proveedor = proveedores.find((p) => p.id === id);
	return proveedor ? proveedor.nombre : "Desconocido";
};

export const getMarcaNombre = (id: number) => {
	const marca = marcas.find((m) => m.id === id);
	return marca ? marca.nombre : "Desconocido";
};
