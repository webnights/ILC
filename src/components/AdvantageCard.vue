<template>
	<div class='p-8 rounded-[20px] bg-white shadow-[0_4px_100px_0_#D0DAE3]'>
		<img class='block mb-4' :src="card.image" alt="Картинка">
		<h6 class='font-bold mb-4 max-w-[105px]'>{{ card.title }}</h6>
		<p class='text !text-left'>{{ card.description }}</p>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'AdvantageCard',
	props:{
		card: {
			type: Object,
			Required: true
		}
	}
})
</script>

<style scoped></style>
