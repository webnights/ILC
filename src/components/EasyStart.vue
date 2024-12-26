<template>
	<div
		class="p-section max-w-[1060px] mx-auto"
		style="
			background: url('./images/easyStart/background.svg') 0 30% / 100%
				no-repeat;
		"
	>
		<h2 class="title !text-center sm:mb-12 mb-6">Начать легко</h2>
		<div
			v-if="cards !== null"
			class="max-w-[950px] start__cards gap-4 grid md:grid-cols-3 grid-rows-4 relative"
		>
			<EasyStartCard
				v-for="(card, index) in sortedCards"
				v-motion
				:initial="{ opacity: 0 }"
				:visible-once="{ opacity: 1 }"
				:duration="700"
				:delay="300 * index"
				:card="card"
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import EasyStartCard from './EasyStartCard.vue'

export default defineComponent({
	name: 'EasyStart',
	components: { EasyStartCard },
})
</script>

<script setup>
const cards = ref(null)
const screenWidth = ref(0)

const updateScreenSize = () => {
	screenWidth.value = window.innerWidth
}
onMounted(async () => {
	const response = await fetch(
		'https://api.jsonbin.io/v3/b/676d7982acd3cb34a8bfb37a'
	)
	const data = await response.json()
	cards.value = data.record.easyStart
	updateScreenSize()
	window.addEventListener('resize', updateScreenSize)
	console.log(sortedCards.value)
})

const sortedCards = computed(() => {
	if (screenWidth.value < 768) {
		return cards.value.sort((a, b) => a.order - b.order)
	}
	return cards.value
})
</script>

<style scoped></style>
