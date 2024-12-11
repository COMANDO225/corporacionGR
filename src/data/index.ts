export interface Proveedor {
	id: number;
	nombre: string;
	direccion: string;
	telefono: string;
	email: string;
	marcas: number[];
}

export const proveedores: Proveedor[] = [
	{
		id: 1,
		nombre: "Maquinarias S.A.",
		direccion: "Av. República de Panamá 3591, San Isidro, Lima",
		telefono: "+51 1 212 4000",
		email: "contacto@maquinarias.com.pe",
		marcas: [1], // nissan
	},
	{
		id: 2,
		nombre: "Mitsui Automotriz S.A.",
		direccion: "Av. República de Panamá 5630, Surquillo, Lima",
		telefono: "+51 1 201 9100",
		email: "info@mitsuiautomotriz.com.pe",
		marcas: [2, 24, 25], // toyota, lexus, hino
	},
	{
		id: 3,
		nombre: "Derco Perú S.A.",
		direccion: "Av. El Polo 1117, Santiago de Surco, Lima",
		telefono: "+51 1 616 7700",
		email: "ventas@derco.com.pe",
		marcas: [3, 4, 5, 6], // suzuki, mazda, renault, changan
	},
	{
		id: 4,
		nombre: "Grupo Pana",
		direccion: "Av. República de Panamá 4518, Surquillo, Lima",
		telefono: "+51 1 618 5050",
		email: "contacto@grupopana.com",
		marcas: [7, 8, 9, 10], // hyundai, jeep, dodge, RAM
	},
	{
		id: 5,
		nombre: "SKBergé Perú",
		direccion: "Av. Javier Prado Este 476, San Isidro, Lima",
		telefono: "+51 1 634 7000",
		email: "info@skberge.com.pe",
		marcas: [11, 12, 13, 14], // kia, fiat, peugeot, chrysler
	},
	{
		id: 6,
		nombre: "Autoland",
		direccion: "Av. La Marina 3415, San Miguel, Lima",
		telefono: "+51 1 200 8300",
		email: "ventas@autoland.com.pe",
		marcas: [15, 16], // honda, subaru
	},
	{
		id: 7,
		nombre: "Gildemeister Perú",
		direccion: "Av. Canaval y Moreyra 725, San Isidro, Lima",
		telefono: "+51 1 640 5252",
		email: "contacto@gildemeister.com.pe",
		marcas: [7], // hyundai
	},
	{
		id: 8,
		nombre: "Inchcape Motors Perú",
		direccion: "Av. El Derby 150, Santiago de Surco, Lima",
		telefono: "+51 1 617 9797",
		email: "info@inchcape.com.pe",
		marcas: [17, 18, 19], // BMW, min, rolls
	},
	{
		id: 9,
		nombre: "Euromotors",
		direccion: "Av. Javier Prado Este 5530, La Molina, Lima",
		telefono: "+51 1 618 5050",
		email: "ventas@euromotors.com.pe",
		marcas: [20, 21, 22], // audi, porsche, volks
	},
	{
		id: 10,
		nombre: "Lidercon Perú",
		direccion: "Av. Argentina 2060, Callao",
		telefono: "+51 1 574 0000",
		email: "contacto@lidercon.com.pe",
		marcas: [23], // chevrolet
	},
];

export interface Marca {
	id: number;
	nombre: string;
}

export const marcas: Marca[] = [
	{ id: 1, nombre: "Nissan" },
	{ id: 2, nombre: "Toyota" },
	{ id: 3, nombre: "Suzuki" },
	{ id: 4, nombre: "Mazda" },
	{ id: 5, nombre: "Renault" },
	{ id: 6, nombre: "Changan" },
	{ id: 7, nombre: "Hyundai" },
	{ id: 8, nombre: "Jeep" },
	{ id: 9, nombre: "Dodge" },
	{ id: 10, nombre: "RAM" },
	{ id: 11, nombre: "Kia" },
	{ id: 12, nombre: "Fiat" },
	{ id: 13, nombre: "Peugeot" },
	{ id: 14, nombre: "Chrysler" },
	{ id: 15, nombre: "Honda" },
	{ id: 16, nombre: "Subaru" },
	{ id: 17, nombre: "BMW" },
	{ id: 18, nombre: "Mini" },
	{ id: 19, nombre: "Rolls-Royce" },
	{ id: 20, nombre: "Audi" },
	{ id: 21, nombre: "Porsche" },
	{ id: 22, nombre: "Volkswagen" },
	{ id: 23, nombre: "Chevrolet" },
	{ id: 24, nombre: "Lexus" },
	{ id: 25, nombre: "Hino" },
];

export const bonosTableColumns = [
	{
		id: 1,
		label: "Videncia",
	},
	{
		id: 2,
		label: "Proveedor",
	},
	{
		id: 3,
		label: "Marca",
	},
	{
		id: 4,
		label: "Modelo",
	},
	{
		id: 5,
		label: "Bonos",
	},
	{
		id: 6,
		label: "Fecha de inicio",
	},
	{
		id: 7,
		label: "Fecha de fin",
	},
	{
		id: 8,
		label: "Acciones",
	},
];

export interface Bono {
	id: number;
	videncia: boolean;
	proveedor: number;
	marca: number;
	modelo: string;
	nombreBono: string;
	fechaInicio: string;
	fechaFin: string;
}

export interface Bono {
	id: number;
	videncia: boolean;
	proveedor: number;
	marca: number;
	modelo: string;
	nombreBono: string;
	fechaInicio: string;
	fechaFin: string;
}

export const bonos: Bono[] = [
	{
		id: 1,
		videncia: true,
		proveedor: 1,
		marca: 1,
		modelo: "Kicks",
		nombreBono: "Bono de descuento",
		fechaInicio: "2021-01-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 2,
		videncia: true,
		proveedor: 1,
		marca: 1,
		modelo: "March",
		nombreBono: "Bono de descuento",
		fechaInicio: "2021-01-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 3,
		videncia: true,
		proveedor: 1,
		marca: 1,
		modelo: "Versa",
		nombreBono: "Bono de descuento",
		fechaInicio: "2021-01-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 4,
		videncia: true,
		proveedor: 1,
		marca: 1,
		modelo: "Sentra",
		nombreBono: "Bono de descuento",
		fechaInicio: "2021-01-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 5,
		videncia: true,
		proveedor: 1,
		marca: 1,
		modelo: "X-Trail",
		nombreBono: "Bono de descuento",
		fechaInicio: "2021-01-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 6,
		videncia: true,
		proveedor: 1,
		marca: 1,
		modelo: "Kicks",
		nombreBono: "Bono de descuento",
		fechaInicio: "2021-01-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 7,
		videncia: true,
		proveedor: 2,
		marca: 2,
		modelo: "Corolla",
		nombreBono: "Bono especial",
		fechaInicio: "2022-01-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 8,
		videncia: true,
		proveedor: 2,
		marca: 2,
		modelo: "Camry",
		nombreBono: "Bono especial",
		fechaInicio: "2022-01-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 9,
		videncia: true,
		proveedor: 2,
		marca: 2,
		modelo: "RAV4",
		nombreBono: "Bono especial",
		fechaInicio: "2022-01-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 10,
		videncia: true,
		proveedor: 2,
		marca: 2,
		modelo: "Highlander",
		nombreBono: "Bono especial",
		fechaInicio: "2022-01-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 11,
		videncia: true,
		proveedor: 3,
		marca: 3,
		modelo: "Swift",
		nombreBono: "Bono de lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 12,
		videncia: true,
		proveedor: 3,
		marca: 3,
		modelo: "Vitara",
		nombreBono: "Bono de lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 13,
		videncia: true,
		proveedor: 3,
		marca: 4,
		modelo: "Mazda3",
		nombreBono: "Bono de lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 14,
		videncia: true,
		proveedor: 3,
		marca: 4,
		modelo: "CX-5",
		nombreBono: "Bono de lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 15,
		videncia: true,
		proveedor: 4,
		marca: 7,
		modelo: "Tucson",
		nombreBono: "Bono de fidelidad",
		fechaInicio: "2022-05-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 16,
		videncia: true,
		proveedor: 4,
		marca: 7,
		modelo: "Santa Fe",
		nombreBono: "Bono de fidelidad",
		fechaInicio: "2022-05-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 17,
		videncia: true,
		proveedor: 4,
		marca: 8,
		modelo: "Wrangler",
		nombreBono: "Bono de fidelidad",
		fechaInicio: "2022-05-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 18,
		videncia: true,
		proveedor: 4,
		marca: 8,
		modelo: "Cherokee",
		nombreBono: "Bono de fidelidad",
		fechaInicio: "2022-05-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 19,
		videncia: true,
		proveedor: 5,
		marca: 11,
		modelo: "Sportage",
		nombreBono: "Bono por aniversario",
		fechaInicio: "2021-06-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 20,
		videncia: true,
		proveedor: 5,
		marca: 11,
		modelo: "Sorento",
		nombreBono: "Bono por aniversario",
		fechaInicio: "2021-06-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 21,
		videncia: true,
		proveedor: 6,
		marca: 15,
		modelo: "Civic",
		nombreBono: "Bono especial",
		fechaInicio: "2021-07-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 22,
		videncia: true,
		proveedor: 6,
		marca: 15,
		modelo: "CR-V",
		nombreBono: "Bono especial",
		fechaInicio: "2021-07-01",
		fechaFin: "2021-12-31",
	},
	{
		id: 23,
		videncia: true,
		proveedor: 7,
		marca: 7,
		modelo: "Elantra",
		nombreBono: "Bono especial",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 24,
		videncia: true,
		proveedor: 8,
		marca: 17,
		modelo: "X1",
		nombreBono: "Bono por lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 25,
		videncia: true,
		proveedor: 8,
		marca: 17,
		modelo: "X3",
		nombreBono: "Bono por lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 26,
		videncia: true,
		proveedor: 8,
		marca: 18,
		modelo: "Cooper",
		nombreBono: "Bono por lanzamiento",
		fechaInicio: "2023-01-01",
		fechaFin: "2023-12-31",
	},
	{
		id: 27,
		videncia: true,
		proveedor: 9,
		marca: 20,
		modelo: "A3",
		nombreBono: "Bono especial",
		fechaInicio: "2022-04-01",
		fechaFin: "2022-12-31",
	},
	{
		id: 28,
		videncia: true,
		proveedor: 9,
		marca: 20,
		modelo: "Q5",
		nombreBono: "Bono especial",
		fechaInicio: "2022-04-01",
		fechaFin: "2022-12-31",
	},
];
