import { WritableComputedRef } from 'vue-demi';

export interface MainState {
	darkMode: WritableComputedRef<boolean>;
	isAdmin: boolean;
	logined: boolean;
	sidebar: boolean;
	toggleSidebar: () => void;
}
