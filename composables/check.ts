import { StateRes } from '@/typings';

/**
 * Check state and navigate.
 */
export const checkStateAndNavigate = async () => {
	const nowPath = window.location.pathname;
	const isInitPage = nowPath.startsWith('/init');
	const isLoginPage = nowPath.startsWith('/login');
	const nowState: StateRes = await $useGet('/api/state');

	if (!nowState.id) {
		if (!isInitPage) navigateTo('/init', { replace: true });
	} else if (!nowState.lg) {
		if (!isLoginPage) navigateTo('/login', { replace: true });
	} else {
		if (isLoginPage) navigateTo('/', { replace: true });
	}
}
