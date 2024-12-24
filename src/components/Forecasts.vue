<template>
	<div class="bg-primary sm:py-[80px] py-[48px]">
		<div class="container">
			<div class="flex flex-wrap justify-between items-start gap-8">
				<h2 class="title !text-white sm:text-[32px] text-[24px] flex-grow-0 md:w-[400px] text-pretty">
					Прогнозы партнерской программы на 2021 год
				</h2>
				<ul v-if="forecasts" class="flex md:flex-nowrap flex-wrap  max-w-[770px] sm:justify-between justify-center items-start gap-4">
					<li class='md:max-w-full max-w-[150px]'  v-for="(item, index) in forecasts" :key="index">
						<span
							class="sm:text-[32px] text-[24px] sm:mb-4 mb-2 text-center font-bold whitespace-nowrap"
							>{{ item.value }}</span
						>
						<p class="text-center text-white font-medium">
							{{ item.description }}
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
	name: 'Forecasts',
})
</script>

<script setup>
const forecasts = ref(null)
onMounted(async () => {
	const response = await fetch('http://localhost:3000/forecasts')
	forecasts.value = await response.json()
})
</script>

<style scoped>
span {
	background: linear-gradient(
		130deg,
		rgba(70, 20, 232, 1) 0%,
		rgba(188, 167, 255, 1) 100%
	);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
