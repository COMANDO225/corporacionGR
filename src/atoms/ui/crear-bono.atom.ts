import { create } from "zustand";

type CrearBonoState = {
	isOpenModalBono: boolean;
};

type CrearBonoActions = {
	toggleModalBono: () => void;
	onOpenModalBono: () => void;
	onCloseModalBono: () => void;
};

export const useCrearBonoStore = create<CrearBonoState & CrearBonoActions>(
	(set) => ({
		isOpenModalBono: false,
		toggleModalBono: () =>
			set((state) => ({ isOpenModalBono: !state.isOpenModalBono })),
		onOpenModalBono: () => set({ isOpenModalBono: true }),
		onCloseModalBono: () => set({ isOpenModalBono: false }),
	})
);
