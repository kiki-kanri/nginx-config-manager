<template>
	<el-menu
		class="h-100 sidebar-menu"
		background-color="#252828"
		text-color="#fff"
		:class="{ toggle: mainState.sidebar }"
		:default-active="$route.path"
		router
	>
		<el-menu-item index="/" style="margin-top: 48px;" @click="mainState.sidebar = false">
			<span class="ms-3">首頁</span>
		</el-menu-item>
		<el-sub-menu index="/profile">
			<template #title>
				<span class="ms-3">個人資料操作</span>
			</template>
			<sidebar-el-item index="/profile/password" text="變更密碼" />
		</el-sub-menu>
		<sidebar-el-item class="btn-close-sidebar" index="" text="關閉選單" />
	</el-menu>
</template>

<style lang="scss" scoped>

	.sidebar-menu {
		letter-spacing: 2px;
		width: 200px;
	}

	.btn-close-sidebar {
		display: none;
	}

	@media(max-width: 768px) {
		.sidebar-menu {
			position: fixed;
			left: -200px;
			transition: left 0.3s ease-out;
			z-index: 10000;

			&.toggle {
				left: 0;
			}
		}

		.btn-close-sidebar {
			display: block;
		}
	}

</style>
