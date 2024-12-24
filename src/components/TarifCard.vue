<template>
	<div
		v-if="card"
		:class="[
			'sm:p-12 p-6 bg-white rounded-[20px]',
			card.name == 'Легкий старт'
				? 'lg:col-span-2 flex flex-col sm:items-center text-center'
				: 'col-span-1',
		]"
	>
		<div :class="[card.name === 'Легкий старт' ? 'text-center' : 'sm:text-left text-center']">
			<h4
				class="sm:text-[16px] text-xs text-secondary mb-4 tracking-widest font-medium uppercase"
			>
				{{ card.name }}
			</h4>
			<article
				v-if="card.status !== ''"
				class="sm:text-[32px] text-[18px] text-[#C9C9C9] font-medium mb-4"
			>
				{{ card.status }}
			</article>
			<p class="opacity-60 mb-4 sm:text-[14px] text-xs">{{ card.purpose }}</p>
			<span v-if="card.price !== ''" class="font-medium mb-4 block sm:text-[16px] text-[14px]" 
				>${{
					tarif === '1 месяц' ? card.price.month : card.price.year
				}}/месяц</span
			>
		</div>
		<div>
			<h6 :class="['mb-6 font-medium', card.name === 'Легкий старт' ? 'text-center' : 'sm:text-left text-center']">Для Вас доступно</h6>
			<ul
				:class="[
					'grid gap-4 mb-6 max-w-[640px]',
					card.name == 'Легкий старт' ? 'sm:grid-cols-2' : 'grid-cols-1',
				]"
			>
				<li
					class='leading-6 text-gray text-left flex items-start gap-[10px] '
					v-for="(item, index) in card.abilities"
					:key="index"
				>
					<img
						src="/src/assets/images/advantages/triangle.svg"
						class="scale-[0.7] mt-1"
						alt=""
					/>
					<span class='sm:text-[16px] text-xs leading-6'>{{ item }}</span>
				</li>
			</ul>
		</div>
		<div>
			<a
				href="#"
				class="text-secondary font-medium mb-4 leading-[40px] flex items-center gap-6"
			>
				<span class='sm:text-[16px] text-xs'>Подробнее в личном кабинете</span>
				<img src="/src/assets/images/tarrifs/arrow.svg" alt="" />
			</a>
			<button
				:class="['button', card.name == 'Легкий старт' ? 'sm:mx-auto' : 'mx-0']"
			>
				Оставить заявку
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'TarifCard',
	props: {
		card: {
			type: Object,
			Required: true,
		},
		tarif: {
			type: String,
			Required: true,
		},
	},
})
</script>

<style scoped></style>
