<template>
	<div class="p-section w-full">
		<h2 class="title mb-[40px] mx-auto">Преимущества сервиса</h2>
		<div
			class="max-w-[1100px] mx-auto flex lg:flex-row flex-col gap-4 items-start justify-between"
		>
			<div class="relative">
				<img
					class="max-w-[220px] w-full mb-6 sm:mb-0"
					src="/images/advantages/phone.svg"
					alt="Смартфон"
				/>
				<div
					class="p-4 bg-white rounded-[12px] max-w-[190px] absolute top-[-5%] right-[-20%] shadow-[0_13px_40px_0_#BBA6FF]"
				>
					<span class="font-bold text-center text-xs block mb-[6px]"
						>Чем могу вам помочь?</span
					>
					<button class="button !text-xs !px-[20px] !py-[15px]">
						Задайте вопрос
					</button>
				</div>
			</div>
			<div class="lg:max-w-[440px] lg:ml-[50px] lg:pt-8">
				<h6 class="text-primary mb-2 font-bold tracking-[0.25em]">SIRIUS</h6>
				<p class="text !text-left">
					— первый полноценный искусственный интеллект, самостоятельно
					консультирующий людей по любым юридическим вопросам в режиме реального
					времени. <br /><br />Sirius анализирует входящий запрос и оперативно
					генерирует квалифицированный ответ на основании юридической логики.
					<br /><br />
					Доступ к системе предоставляется владельцу полиса в личном кабинете на
					нашем сайте.
				</p>
			</div>
			<div class="flex flex-col gap-6 lg:pt-12 ">
				<div
					v-if="service !== null"
					v-for="(benefit, index) in service.benefits"
					:key="index"
					class="relative pl-5"
				>
					<img
						class="absolute left-[-10px] top-[9px]"
						src="../assets/images/advantages/triangle.svg"
						alt=""
					/>
					<p class="text lg:max-w-[300px] !text-left">{{ benefit }}</p>
				</div>
			</div>
		</div>

		<!-- Карточки -->
		<div 
		v-if='service !== null'
		class='max-w-[1250px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto xl:mt-[-70px] mt-8 relative z-1'
		>
				<AdvantageCard
					v-for='(card, index) in service.cards'
					:key='index'
					:card='card'
				/>
		</div>
	</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import AdvantageCard from './AdvantageCard.vue';

export default defineComponent({
	name: 'Advantages',
	components: {AdvantageCard}
})
</script>

<script setup>
const service = ref(null)

onMounted(async () => {
	const response = await fetch('http://localhost:3000/service')
	service.value = await response.json()
	console.log(service.value)
})
</script>
<style scoped>
h2 {
	text-align: center;
}
</style>
