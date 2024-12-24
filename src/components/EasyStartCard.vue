<template>
	<div
		:class="[
			'bg-white rounded-[20px] flex flex-col gap-5',
			card.area === '2' ? 'sm:row-span-4 sm:py-[60px] sm:px-[40px] p-6 ' : 'row-span-2 p-6',
			card.area === '3' ? 'sm:row-span-3' : 'row-span-2',
			  
		]"
	>
		<img
			:style="{maxWidth: card.imageWidth + 'px', width: '100%'}"
			v-if="card.image"
			:src="card.image"
			alt=""
		/>
		<span
			v-if="card.number"
			class="text-14 p-4 rounded-[50%] border-2 border-black w-[40px] h-[40px] flex items-center justify-center"
			>{{ card.number }}</span
		>
		<h5 class="font-medium sm:text-[16px] text-[14px]">{{ card.title }}</h5>
		<p class='text-left'>{{ card.text }}</p>
		<button v-if="card.button" class="button">{{ card.button }}</button>
	</div>
</template>

<script>
import { computed, defineComponent, defineProps } from 'vue'
export default defineComponent({
	name: 'EasyStartCard',
	props: {
		card: {
			type: Object,
			Required: true,
		},
	},
})
</script>

<script setup>
const props = defineProps({
	card: {
		type: Object,
		required: true,
	},
})

</script>
<style scoped></style>
