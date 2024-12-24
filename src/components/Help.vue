<template>
	<div class="p-section">
		<h2 class="font-bold text-center mb-8">Даём поддержку</h2>
		<div
			class="max-w-[1100px] flex lg:flex-row flex-col gap-4 justify-between mx-auto"
		>
			<HelpCard 
			v-for="(card, index) in helpCards"
			:key="index" 
			:card = 'card'
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
	const response = await fetch('http://localhost:3000/help')
	helpCards.value = await response.json()
	console.log(helpCards.value)
})
</script>
<style scoped></style>
