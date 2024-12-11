import { create } from "zustand";

type AsideState = {
	isAsideMenuOpen: boolean;
};

type AsideActions = {
	toggleAsideMenu: () => void;
	onOpenAsideMenu: () => void;
	onCloseAsideMenu: () => void;
};

export const useMenuLateralStore = create<AsideState & AsideActions>((set) => ({
	isAsideMenuOpen: true,
	toggleAsideMenu: () =>
		set((state) => ({ isAsideMenuOpen: !state.isAsideMenuOpen })),
	onOpenAsideMenu: () => set({ isAsideMenuOpen: true }),
	onCloseAsideMenu: () => set({ isAsideMenuOpen: false }),
}));

type AsideMobileState = {
	isAsideMobileOpen: boolean;
};

type AsideMobileActions = {
	toggleAsideMobile: () => void;
	onOpenAsideMobile: () => void;
	onCloseAsideMobile: () => void;
};

export const useAsideMobileStore = create<
	AsideMobileState & AsideMobileActions
>((set) => ({
	isAsideMobileOpen: false,
	toggleAsideMobile: () =>
		set((state) => ({ isAsideMobileOpen: !state.isAsideMobileOpen })),
	onOpenAsideMobile: () => set({ isAsideMobileOpen: true }),
	onCloseAsideMobile: () => set({ isAsideMobileOpen: false }),
}));
