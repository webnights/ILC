<template>
	<!-- //Флекс контейнер -->
	<div
		id="about"
		class="max-w-[1000px] lg:mx-auto flex lg:flex-row flex-col justify-between items-center gap-5 sm:pb-[85px] pb-[72px] sm:px-10 px-5 relative"
	>
		<!-- //Блок с текстом -->
		<div class="max-w-[400px]">
			<img
				class="md:block mb-8 md:text-left md:mx-0  mx-auto " 
				src="../assets/images/logo_textless.svg"
				alt="Логотип"
			/>
			<h2 class="title mb-4">Ваша личная online команда юристов</h2>
			<p class="">
				Мы предоставляем комплексный консалтинговый сервис с полисной системой
				обслуживания для частных клиентов и для бизнеса, с использованием
				новейших цифровых технологий.
			</p>
		</div>

		<!-- //Карточки -->
		<ul class="grid grid-cols-2 gap-5">
			<li
				class="sm:p-8 p-4 bg-white rounded-[10px] shadow-cyan-500/ shadow-[0_4px_100px_0_#D0DAE3] whitespace-nowrap"
				style="
					background: linear-gradient(
						45deg,
						rgba(244, 249, 255, 1) 0%,
						rgba(255, 255, 255, 1) 100%
					);
				"
			>
				<h5 class="text-primary text-[48px] font-bold">
					100+<span class="text-[16px] sm:inline block">тыс</span>
				</h5>
				<p class="text text-left">
					Клиентов <br />
					по всему миру
				</p>
			</li>
			<li
				class="sm:p-6 p-4 bg-white rounded-[10px] max-w-[180px] h-[135px] mt-auto shadow-[0_4px_100px_0_#D0DAE3] background: linear-gradient(45deg, rgba(244,249,255,1) 0%, rgba(255,255,255,1) 100%);"
			>
				<h5 class="text-primary sm:text-[36px] text-[32px] font-bold">
					15 <span class="text-[16px]">лет</span>
				</h5>
				<p class="text text-left">Опытных<br />юристов в штате</p>
			</li>
			<li
				class="sm:p-6 p-4 bg-white rounded-[10px] max-w-[180px] h-[135px] ml-auto shadow-[0_4px_100px_0_#D0DAE3] background: linear-gradient(45deg, rgba(244,249,255,1) 0%, rgba(255,255,255,1) 100%);"
			>
				<h5 class="text-primary sm:text-[36px] text-[32px] font-bold">50+</h5>
				<p class="text text-left">
					Опытных <br />
					юристов в штате
				</p>
			</li>
			<li
				class="sm:p-8 p-4 bg-white rounded-[10px] shadow-[0_4px_100px_0_#D0DAE3] background: linear-gradient(45deg, rgba(244,249,255,1) 0%, rgba(255,255,255,1) 100%);"
			>
				<h5 class="text-primary text-[16px]  font-bold">
					SIRIUS
				</h5>
				<p class="text text-left">
					Система на базе <br />
					искусственного <br />
					интеллекта
				</p>
			</li>
		</ul>

		<!-- //Кружки на бекграунде -->

		<div
			class="circle w-[160px] h-[160px] rounded-[50%] absolute z-[-1] sm:top-[-10%] top-[40%] right-[-8%]"
		>
	</div>
		<div
			class="circle w-[40px] h-[40px] rounded-[50%] absolute z-[-1] top-[40%] left-[56%]"
		>
	</div>
		<div
			class="circle w-[25px] h-[25px] rounded-[50%] absolute z-[-1] top-[46%] right-[22%]"
		>
	</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'About',
})
</script>

<style scoped>
h5 {
	background: linear-gradient(
		90deg,
		rgba(70, 20, 232, 1) 0%,
		rgba(188, 167, 255, 1) 100%
	);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
.circle {
	background: linear-gradient(
		90deg,
		rgba(225, 216, 255, 1) 0%,
		rgba(244, 236, 255, 1) 100%
	);
}
</style>
