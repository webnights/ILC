<template>
	<div style="border-top: 1px solid #dee6ef">
		<div class="container">
			<div class="flex flex-wrap items-center w-full sm:justify-between justify-center py-8 gap-5">
				<div class="flex flex-wrap items-center  sm:justify-normal justify-center gap-12">
					<img src="/src/assets/images/logo.svg" alt="Логотип" />
					<p class="max-w-[240px] text-[12px]">
						Первый цифровой международный юридический центр
					</p>
				</div>
				<ul class="flex gap-2 items-center">
					<li
						class="p-[10px] rounded-[10px] w-[36px] h-[36px] flex items-center justify-center"
						style="border: 1px solid #cfdae7"
					>
						<img src="/src/assets/images/vk.svg" alt="" />
					</li>
					<li
						class="p-[10px] rounded-[10px] w-[36px] h-[36px] flex items-center justify-center"
						style="border: 1px solid #cfdae7"
					>
						<img src="/src/assets/images/instagram.svg" alt="" />
					</li>
					<li
						class="p-[10px] rounded-[10px] w-[36px] h-[36px] flex items-center justify-center"
						style="border: 1px solid #cfdae7"
					>
						<img src="/src/assets/images/twitter.svg" alt="" />
					</li>
					<li
						class="p-[10px] rounded-[10px] w-[36px] h-[36px] flex items-center justify-center"
						style="border: 1px solid #cfdae7"
					>
						<img src="/src/assets/images/facebook.svg" alt="" />
					</li>
				</ul>
			</div>
		</div>
		<div class='bg-[#E8EDF3] sm:py-4 py-8'>
			<div class="container">
				<div class='flex items-center justify-between flex-wrap-reverse gap-8'>
					<div>
						<p class="text-[12px] text-[#7A7A7A] max-w-[280px]">
							©2021 «International Legal Center» | Разработано: effex-it.com
						</p>
					</div>
					<div class="flex flex-wrap sm:justify-normal justify-center gap-3">
						<a href="#" class="text-[10px] text-[#7A7A7A]"
							>Политика конфиденциальности</a
						>
						<a href="#" class="text-[10px] text-[#7A7A7A]"
							>Пользовательское соглашение</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Footer',
})
</script>

<style scoped></style>
