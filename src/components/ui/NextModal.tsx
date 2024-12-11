import { cn } from "@/lib/utils";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalProps,
} from "@nextui-org/react";
import { X } from "lucide-react";
import { FC } from "react";

interface NextModalProps extends ModalProps {
	titulo?: string;
}

const NextModal: FC<NextModalProps> = ({ ...props }) => {
	const handleClickClose = () => {
		if (props.onClose) {
			props.onClose();
		}
	};

	return (
		<Modal
			classNames={{
				closeButton: "hidden",
			}}
			size='2xl'
			{...props}
		>
			<ModalContent>
				<ModalHeader
					className={cn(
						"flex justify-between py-2.5 pb-2 px-4 border-b"
					)}
				>
					<h2 className='font-medium'>
						{props.titulo || "Título del modal"}
					</h2>
					<button
						type='button'
						aria-label='cerrar modal'
						className='w-8 h-8 hover:bg-[#f0f2f5] rounded-full flex justify-center items-center'
						onClick={handleClickClose}
					>
						<X size={20} />
					</button>
				</ModalHeader>
				<ModalBody className={cn("p-2 py-3 md:py-4 md:px-4")}>
					{props.children || "Contenido del modal"}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default NextModal;
