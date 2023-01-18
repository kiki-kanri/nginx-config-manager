<template>
	<NuxtLayout>
		<Head>
            <Title>Nginx設定檔管理系統</Title>
        </Head>
		<NuxtPage></NuxtPage>
	</NuxtLayout>
</template>

<script lang="ts" setup>

	if (!IS_SERVER) {
		// Disable ctrl+s and ctrl+u
		window.addEventListener('keydown', (event) => {
			if (checkEventKey(event, 's', { ctrl: true }, true)) event.preventDefault();
			if (checkEventKey(event, 'u', { ctrl: true }, true)) event.preventDefault();
		}, false);

		// Disable drop file open newtab
		document.addEventListener('dragover', (event) => {
			event.preventDefault();
		});

		window.addEventListener('drop', (event) => {
			event.preventDefault();
		}, false);
	}

</script>
