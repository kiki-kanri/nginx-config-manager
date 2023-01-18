import { WritableComputedRef } from 'vue-demi';

export interface IDict<T> {
	[key: string]: T;
}

export interface MainState {
	darkMode: WritableComputedRef<boolean>;
	isAdmin: boolean;
	logined: boolean;
	sidebar: boolean;
	toggleSidebar: () => void;
}

export interface StateRes {
	ia: boolean; // Is admin
	id: boolean; // Inited
	lg: boolean; // Logined
}
