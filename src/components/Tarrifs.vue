<template>
	<div class="p-section relative">
		<h2 class="title sm:mb-4 mb-2 !text-center mx-auto">Тарифы</h2>
		<p class="text sm:mb-8 mb-4 !text-center">для всех и для каждого</p>
		<div
			class="flex justify-center sm:gap-[65px] gap-4 items-center absolute left-[50%] translate-x-[-50%] sm:text-[20px] text-[12px]"
		>
			<button
				type="button"
				:class="[
					'tab font-medium text-primary  border-b-[2px] border-dotted duration-500',
					tarif == '1 месяц' ? 'tab__active' : '',
				]"
				@click="setActive('1 месяц')"
			>
				1 месяц
			</button>
			<button
				type="button"
				:class="[
					'tab  font-medium text-primary  border-b-[2px] border-dotted  duration-500',
					tarif == 'Год' ? 'tab__active' : '',
				]"
				@click="setActive('Год')"
			>
				Год
			</button>
		</div>

		<!-- Карточки тарифов -->
		<ul
			v-if="tariffs !== null"
			class="grid lg:grid-cols-2 grid-cols-1 sm:mt-[120px] mt-[80px] max-w-[1060px] mx-auto gap-8"
		>
			<TarifCard
				v-for="(card, index) in tarifs"
				:key="index"
				:card="card"
				:tarif="tarif"
			/>
		</ul>
	</div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import TarifCard from './TarifCard.vue'
export default defineComponent({
	name: 'Tarrifs',
	components: { TarifCard },
})
</script>

<script setup>
const tarif = ref('1 месяц')
const tarifs = ref(null)
const setActive = text => {
	tarif.value = text
	console.log(tarif.value)
}

onMounted(async () => {
	const response = await fetch('http://localhost:3000/tariffs')
	tarifs.value = await response.json()
})
</script>

<style scoped>
.tab__active {
	background-color: #273895;
	color: #fff;
	border-radius: 15px;
	border: 0;
	padding: 10px 28px;
}
</style>
