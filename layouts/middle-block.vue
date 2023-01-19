<template>
    <div class="position-fixed wh-100 overflow-auto">
        <div id="middle-block-layout" class="p-3 d-flex flex-column align-items-center">
            <div id="middle-block" class="position-sticky p-3 bg-white text-center">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    #middle-block-layout {
		min-height: 100vh;
	}

    #middle-block {
		border-radius: 10px;
		box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.25);
		margin-top: auto;
		margin-bottom: auto;
	}

</style>
