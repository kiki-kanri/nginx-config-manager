import { useDark } from '@vueuse/core';

import { MainState } from '@/typings';

export const mainState = useState('main', () => {
	return {
		darkMode: useDark(),
		isAdmin: false,
		logined: false,
		sidebar: false,
		toggleSidebar() {
			this.sidebar = !this.sidebar;
		}
	} as MainState
});
