<template>
	<div class="p-section w-full">
		<h2
			v-motion
			:initial="{ opacity: 0, y: -50 }"
			:visible-once="{ opacity: 1, y: 0 }"
			:duration="1000"
			class="title mb-[40px] mx-auto"
		>
			Преимущества сервиса
		</h2>
		<div
			class="max-w-[1100px] mx-auto flex lg:flex-row flex-col gap-4 items-start justify-between"
		>
			<div
				v-motion
				:initial="{ opacity: 0, x: -100 }"
				:visible-once="{ opacity: 1, x: 0 }"
				:duration="600"
				:delay="100"
				class="relative"
			>
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
			<div
				v-motion
				:initial="{ opacity: 0 }"
				:visible-once="{ opacity: 1 }"
				:duration="600"
				:delay="300"
				class="lg:max-w-[440px] lg:ml-[50px] lg:pt-8"
			>
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
			<div class="flex flex-col gap-6 lg:pt-12">
				<div
					v-if="service !== null"
					v-for="(benefit, index) in service.benefits"
					v-motion
					:initial="{ opacity: 0 }"
					:visible-once="{ opacity: 1 }"
					:duration="400"
					:delay="100 * index"
					:key="index"
					class="relative pl-5"
				>
					<img
						class="absolute left-[-10px] top-[9px]"
						src="/images/advantages/triangle.svg"
						alt=""
					/>
					<p class="text lg:max-w-[300px] !text-left">{{ benefit }}</p>
				</div>
			</div>
		</div>

		<!-- Карточки -->
		<div
			v-if="service !== null"
			class="max-w-[1250px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto xl:mt-[-70px] mt-8 relative z-1"
		>
			<AdvantageCard
				v-for="(card, index) in service.cards"
				v-motion
				:initial="{ opacity: 0, x: -50 }"
				:visible-once="{ opacity: 1, x: 0 }"
				:duration="600"
				:delay="150 * index"
				:key="index"
				:card="card"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import AdvantageCard from './AdvantageCard.vue'

export default defineComponent({
	name: 'Advantages',
	components: { AdvantageCard },
})
</script>

<script setup>
const service = ref(null)

onMounted(async () => {
	const response = await fetch('https://api.jsonbin.io/v3/b/676d7982acd3cb34a8bfb37a')
	const data = await response.json()
	service.value = data.record.service
})
</script>
<style scoped>
h2 {
	text-align: center;
}
</style>
