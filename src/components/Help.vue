<template>
	<div class="p-section">
		<h2
			v-motion
			:initial="{ opacity: 0, y: -50 }"
			:visible-once="{ opacity: 1, y: 0 }"
			:duration="1000"
			class="font-bold text-center mb-8"
		>
			Даём поддержку
		</h2>
		<div
			class="max-w-[1100px] flex lg:flex-row flex-col gap-4 justify-between mx-auto"
		>
			<HelpCard
				v-for="(card, index) in helpCards"
				v-motion
				:initial="{ opacity: 0, y: 100 }"
				:visible-once="{ opacity: 1, y: 0 }"
				:duration="1000"
				:delay="300 * index"
				:key="index"
				:card="card"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import HelpCard from './HelpCard.vue'
export default defineComponent({
	name: 'Help',
	components: { HelpCard },
})
</script>

<script setup>
const helpCards = ref(null)

onMounted(async () => {
	const response = await fetch('https://api.jsonbin.io/v3/b/676d7982acd3cb34a8bfb37a')
	const data = await response.json();
	helpCards.value = data.record.help;
})
</script>
<style scoped></style>
