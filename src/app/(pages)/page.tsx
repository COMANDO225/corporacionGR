"use client";

import DropdownButtonItemFile from "@/components/ui/DropdownButtonItemFile/DropdownButtonItemFile";
import { SectionPage } from "@/components/ui/SectionPage";
import {
	FaFile,
	FaFileArchive,
	FaFileExcel,
	FaFileImage,
	FaFilePdf,
	FaFilePowerpoint,
	FaFileWord,
} from "react-icons/fa";

interface File {
	id: number;
	title: string;
	type: string;
	size: string;
	createAt: string;
}

const files: File[] = [
	{
		id: 1,
		title: "Archivo 1 - Proyecto 1",
		type: "pdf",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	// creame 15 mas pero de diferente tipo, nombre random casual y datos random papi <3
	{
		id: 2,
		title: "Archivo 2 - Proyecto 1 masna en el desierto",
		type: "doc",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 3,
		title: "Archivo 3 - Proyecto 1",
		type: "xls",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 4,
		title: "Archivo 4 - Proyecto 1",
		type: "ppt",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 5,
		title: "Archivo 5 - Proyecto 1",
		type: "img",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 6,
		title: "Archivo 6 - Proyecto 1",
		type: "zip",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 7,
		title: "Archivo 7 - Proyecto 1",
		type: "pdf",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 8,
		title: "Archivo 8 - Proyecto 1",
		type: "pdf",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 9,
		title: "Archivo 9 - Proyecto 1",
		type: "pdf",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 10,
		title: "Archivo 10 - Proyecto 1",
		type: "pdf",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
	{
		id: 11,
		title: "Archivo 11 - Proyecto 1",
		type: "pdf",
		size: "1.2 MB",
		createAt: "2021-09-01",
	},
];

const HomePage = ({}) => {
	return (
		<SectionPage
			title="Gestionar Documentos"
			subtitle="Visualiza y gestiona los bonos de las versiones de autos"
			classNames={{
				section:
					"max-h-[calc(100svh-var(--h-nav))] overflow-auto grid grid-rows-[auto_1fr]",
			}}
		>
			<div className="grid gap-[1rem] grid-cols-[repeat(auto-fit,minmax(248px,1fr))]">
				{files.map((file) => {
					return <FileItem key={file.id} file={file} />;
				})}
			</div>
		</SectionPage>
	);
};

const FileItem = ({ file }: { file: File }) => {
	return (
		<div className="flex flex-col gap-2 rounded-lg hover:shadow bg-[#f0f2f5] p-3 group">
			<div className="flex items-center gap-2">
				{renderIconFile(file.type)}
				<div className="h-[30px] grid grid-cols-[auto_auto] justify-between w-full items-center gap-2">
					<p className="truncate text-sm font-semibold">
						{file.title}
					</p>
					<DropdownButtonItemFile id={file.id} title={file.title} />
				</div>
			</div>
			<div className="bg-gray-200 rounded-lg aspect-video" />
			<div className="flex justify-between">
				<p>{file.size}</p>
				<p>{file.createAt}</p>
			</div>
		</div>
	);
};

const renderIconFile = (type: string) => {
	switch (type) {
		case "pdf":
			return <FaFilePdf size={22} color="#E21837" />;
		case "doc":
			return <FaFileWord size={22} color="#3E7BE1" />;
		case "xls":
			return <FaFileExcel size={22} color="#1D9F42" />;
		case "ppt":
			return <FaFilePowerpoint size={22} color="#D24726" />;
		case "img":
			return <FaFileImage size={22} color="#F7DF1E" />;
		case "zip":
			return <FaFileArchive size={22} color="#F7DF1E" />;
		default:
			return <FaFile size={22} />;
	}
};

export default HomePage;
