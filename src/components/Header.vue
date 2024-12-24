<template>
	<div class="header sm:pt-16 pt-8 ">
		<div class="container">
			<div class="header__inner flex justify-between gap-16">
				<div class="flex items-center gap-16">
					<img
						class="sm:w-full sm:max-w-[200px] tn:max-w-[150px] max-w-[90px]"
						src="/src/assets/images/logo.svg"
						alt="Логотип"
					/>
					<p class="max-w-[230px] text-xs md:block hidden">
						Первый цифровой международный юридический центр
					</p>
				</div>
				<div class="sm:hidden gap-1 items-center flex">
					<img
						class="bg-primary rounded-[7px] w-[50px] h-[50px] flex items-center justify-center p-[15px]"
						src="../assets/images/phone.svg"
						alt="Смартфон"
					/>
					<div
						class="burger bg-[#DEE6EF] flex flex-col items-center justify-center gap-1 w-[50px] h-[50px] p-[15px] rounded-[7px]"
						@click="toggleMenu"
					>
						<span class="w-[22px] h-0.5 bg-primary"></span>
						<span class="w-[22px] h-0.5 bg-primary"></span>
						<span class="w-[22px] h-0.5 bg-primary"></span>
					</div>
				</div>
				<div class="sm:flex hidden items-center gap-12">
					<a href="tel:+78005113768" class="font-bold">8 (800) 511-37-68 </a>
					<button class="button">Войти</button>
				</div>
			</div>
			<nav class="sm:flex hidden gap-1 max-w-[640px] justify-between mt-12">
				<a
					href="#"
					class="hover:text-primary duration-300 font-medium"
					v-for="item in navigation"
				>
					{{ item }}
				</a>
			</nav>
		</div>

		<div
			id="mobile_menu"
			:class="`h-screen w-screen sm:hidden flex flex-col justify-center gap-10 px-6 fixed z-10 top-0 bg-light py-8 duration-300  ${
				isMenuToggle ? 'translate-x-0' : 'translate-x-full'
			}`"

		>
			<img src="../assets/images/logo.svg" alt="Логотип" class="max-w-40" />
			<nav class="flex flex-col gap-2">
				<a
					href="#"
					class="hover:text-primary duration-300 font-medium text-[22px]" 
					v-for="item in navigation"
				>
					{{ item }}
				</a>
			</nav>
			<div>
				<a href="tel:+78005113768" class="font-bold block mb-2"
					>8 (800) 511-37-68
				</a>
				<button class="button">Войти</button>
			</div>
			<div
				class="burger bg-[#DEE6EF] flex flex-col items-center justify-center gap-1 w-[50px] h-[50px] p-[15px] rounded-[7px] absolute right-5 top-5"
				@click="toggleMenu"
			>
				<span class="w-[22px] h-0.5 bg-primary"></span>
				<span class="w-[22px] h-0.5 bg-primary"></span>
				<span class="w-[22px] h-0.5 bg-primary"></span>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Header',
})
</script>

<script setup>
const navigation = [
	'О компании',
	'Услуги',
	'Sirius',
	'Тарифы',
	'FAQ',
	'Контакты',
]
const isMenuToggle = ref(false)
const toggleMenu = () => {
	isMenuToggle.value = !isMenuToggle.value
}
</script>

<style scoped></style>
