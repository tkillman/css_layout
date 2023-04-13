import { atom } from 'recoil';

export type MenuState = {
    isActive: boolean;
};

export const menuDefaultState: MenuState = {
    isActive: false,
};

export const menuState = atom<MenuState>({
    key: 'menuState',
    default: menuDefaultState,
});
