<template>
	<div
		v-motion
		:initial="{ opacity: 0 }"
		:visible-once="{ opacity: 1 }"
		:duration="1000"
		class="p-section sm:pt-[144px] pt-[72px]"
	>
		<div class="max-w-[1060px] mx-auto">
			<div class="max-w-[980px] flex flex-wrap-reverse gap-2 justify-between">
				<div class="relative">
					<img
						class="sm:max-w-[420px] max-w-[230px] w-full"
						src="/images/manager/manager.jpg"
						alt="Менеджер"
					/>
					<blockquote
						class="sm:p-8 p-4 bg-white rounded-[12px] text-[11px] sm:max-w-[360px] max-w-[240px] absolute bottom-[-5%] right-[-31%] shadow-[0_14px_40px_0_rgba(187,166,255,.2)]"
					>
						<strong class="block font-bold text-[25px]">"</strong>
						Я лично буду поддерживать вас на всех этапах развития в программе.
						Обращайтесь ко мне с любым вопросом email.
					</blockquote>
				</div>
				<div class="mt-12 max-w-[450px]">
					<div class="mb-8">
						<span
							class="sm:text-[14px] text-[12px] sm:text-left text-center mb-1"
							>Руководитель ООО ILC
						</span>
						<h2 class="title mb-4">Наталья Гуторова</h2>
						<article
							class="font-medium sm:text-[14px] text-[12px] sm:text-left text-center"
						>
							10 лет в управлении и юриспуденции
						</article>
					</div>
					<div>
						<p class="!text-left">
							Мы стараемся окружить заботой и создать максимально комфортные
							условия для развития каждого партнера:
						</p>
						<ul class="list-disc pl-3 m-2 sm:text-[14px] text-[12px]">
							<li>личный наставник,</li>
							<li>пошаговое обучение,</li>
							<li>готовые инструменты для продвижения</li>
						</ul>
						<p class="mb-4 !text-left">и мгновенные выплаты бонусов.</p>
						<p class="sm:mb-8 mb-4 !text-left">
							Больше деталей партнерской программы смотрите в личном кабинете
							после регистрации.
						</p>
						<button class="button sm:mb-0 mb-8 sm:mx-0 mx-auto">
							Зарегистрироваться
						</button>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Manager',
})
</script>

<style scoped></style>
