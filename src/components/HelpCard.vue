<template>
	<div class='p-8 bg-white rounded-[10px]'>
		<img
		 :src="card.image" alt="Поддержка" 
		 class='max-w-[160px] block mx-auto mb-4'
		 />
		<h6 class='font-bold mb-4 sm:text-left text-center '>{{ card.title }}</h6>
		<p class='text'>{{ card.description }}</p>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'HelpCard',
	props: {
		card: {
			type: Object,
			Required: true,
		},
	},
})
</script>

<style scoped></style>
