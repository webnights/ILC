<template>
	<div
		ref="motion_template"
		class="hero sm:pt-14 md:pb-[240px] pt-[60px] pb-[72px]"
	>
		<div class="container">
			<div
				class="hero__inner relative lg:bg-[url('/images/hero/hero_bg.svg')] bg-[url('/images/hero/hero_mobile.svg')] sm:bg-[90%] bg-no-repeat bg-contain"
			>
				<div class="md:pt-[70px]">
					<h1
						ref="motion_h1"
						class="sm:text-left text-center font-bold sm:text-[48px] text-[24px] text-black max-w-[730px] mb-4"
					>
						Юридический полис ILC — быстрое решение сложных вопросов 24/7
					</h1>
					<p
						ref="motion_p"
						class="sm:text-left text-center text-gray text-[14px] leading-6 mb-8 max-w-[550px]"
					>
						Ваша личная команда профессиональных юристов, которая всегда под
						рукой. А также доступ к бонусам партнерской программы — доход до
						$260 с каждого полиса, купленного по вашему приглашению.
					</p>
					<button ref="motion_button" class="button block sm:mx-0 mx-auto">
						Попробовать бесплатно
					</button>
				</div>

				<div
					id="circle__block"
					class="w-[145px] h-[145px] lg:absolute sm:mx-0 mx-auto static mt-5 top-[-20%] right-[12%] flex justify-center items-center rounded-[50%] bg-light"
					style="background-image: url(./images/hero/circle.svg)"
				>
					<div
						class="flex flex-col gap-1 items-center justify-center max-w-[80px] text-balance"
					>
						<p class="font-bold leading-6 text-center">Доход до $260</p>
						<p class="text-xs font-medium text-center">с каждого полиса</p>
					</div>
				</div>
				<ul
					ref="motion_benefits"
					id="hero__benefits"
					class="sm:flex sm:flex-row sm:text-left text-center flex flex-col sm:gap-2 gap-6 px-12 py-8 bg-white rounded-[10px] lg:max-w-[50vw] max-w-full mt-4 lg:absolute static bottom-[-20%] right-0"
				>
					<li
						v-if='benefits'
						v-for="(item, index) in benefits"
						class="flex flex-col sm:items-start sm:gap-2 gap-4 items-center"
					>
						<img :src="item.image" alt="Картинка" />
						<p class="font-medium leading-6">{{ item.title }}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { useMotion } from '@vueuse/motion'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
	name: 'Hero',
})
</script>

<script setup>
const benefits = ref(null)
onMounted(async () => {
	const response = await fetch(
		'https://api.jsonbin.io/v3/b/676d7982acd3cb34a8bfb37a'
	)
	const data = await response.json()
	benefits.value = data.record.hero;
})

const motion_h1 = ref()
const motion_p = ref()
const motion_button = ref()
const motion_benefits = ref()
const motion_template = ref()
useMotion(motion_template, {
	initial: {
		opacity: 0,
	},
	visibleOnce: {
		opacity: 1,
		transition: {
			duration: 500,
			delay: 50,
		},
	},
})
useMotion(motion_h1, {
	initial: {
		opacity: 0,
		y: 100,
	},
	visibleOnce: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 600,
		},
	},
})
useMotion(motion_p, {
	initial: {
		opacity: 0,
		y: 100,
	},
	visibleOnce: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 600,
			delay: 100,
		},
	},
})
useMotion(motion_button, {
	initial: {
		opacity: 0,
		y: 100,
	},
	visibleOnce: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 800,
			delay: 200,
		},
	},
})
useMotion(motion_benefits, {
	initial: {
		opacity: 0,
		x: 200,
	},
	visibleOnce: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 800,
			delay: 500,
		},
	},
})
</script>
