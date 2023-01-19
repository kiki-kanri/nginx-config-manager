<template>
	<el-card class="w-100 mt-3">
		<p>{{ title }}</p>
		<el-form-input label="設定檔資料夾" prop="nginx.dir" v-model="formData.dir" />
		<el-form-input label="設定檔路徑" prop="nginx.configPath" v-model="formData.configPath" />
		<el-form-input label="重新載入設定指令" prop="nginx.reloadCommand" v-model="formData.reloadCommand" />
		<el-form-input class="mb-0" label="重新啟動指令" prop="nginx.restartCommand" v-model="formData.restartCommand" />
	</el-card>
</template>

<script setup>

	defineProps({
		formData: Object,
		title: String
	});

</script>
