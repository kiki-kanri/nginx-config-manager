<template>
	<el-card>
		<p>{{ title }}</p>
		<el-form-input label="資料庫名稱" prop="mongodb.database" v-model="formData.database" />
		<el-form-input label="資料庫Host" prop="mongodb.host" v-model="formData.host" />
		<el-form-input label="資料庫Port" prop="mongodb.port" v-model="formData.port" />
		<el-form-switch class="mb-0" label="需要驗證" v-model="formData.auth" />
		<div class="mt-3" v-if="formData.auth">
			<el-form-input label="資料庫帳號" prop="mongodb.user" v-model="formData.user" />
			<el-form-input label="資料庫密碼" prop="mongodb.password" type="password" v-model="formData.password" />
			<el-form-input class="mb-0" label="驗證資料庫名稱" prop="mongodb.authDatabase" v-model="formData.authDatabase" />
		</div>
	</el-card>
</template>

<script setup>

	defineProps({
		formData: Object,
		title: String
	});

</script>
