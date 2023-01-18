<template>
	<div class="position-fixed wh-100 d-flex">
		<sidebar />
		<div class="position-relative flex-grow-1">
			<div class="position-absolute wh-100 d-flex flex-column">
				<Header />
				<div class="position-relative flex-grow-1">
					<div class="position-absolute wh-100 overflow-auto">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	await checkStateAndNavigate();
</script>
