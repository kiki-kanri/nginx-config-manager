<template>
	<nav class="navbar bg-white">
		<span class="navbar-brand">
			<i class="fa-solid fa-bars btn-toggle-sidebar cursor-pointer" @click="mainState.toggleSidebar"></i>
			Nginx設定檔管理
		</span>
		<div class="flex-grow-1"></div>
		<i class="me-2 fa-solid fa-sun"></i>
		<el-switch v-model="mainState.darkMode" />
		<i class="me-2 ms-2 fa-solid fa-moon"></i>
		<el-button @click="logout">登出</el-button>
	</nav>
</template>

<style lang="scss" scoped>

	.btn-toggle-sidebar {
		display: none;

		@media(max-width: 768px) {
			display: unset;
		}
	}

</style>
