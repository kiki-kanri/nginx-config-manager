/**
 * Logout
 */
export const logout = async () => {
	sendingAlertStart('登出中...');
	const data = await $usePost('/api/user/auth/logout');

	if (data === 'success') {
		assignToUrl('/login');
		sendingAlertSuccess('登出成功！', {
			showConfirmButton: false
		});
	} else {
		sendingAlertError('登出失敗！');
	}
}
