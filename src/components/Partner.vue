<template>
	<div>
		<div
			class="w-full sm:h-[400px] h-[300px] bg-[url(/images/partner/planet.svg)] bg-cover"
		>
			<div class="max-w-[1060px] mx-auto">
				<h2 class="title !text-white mb-4 sm:pt-[90px] pt-12">
					Станьте партнером ILC
				</h2>
				<p class="!text-[16px] text-white max-w-[320px] sm:mx-0 mx-auto">
					и зарабатывайте на рекомендациях в любое время, из любой точки мира
				</p>
			</div>
		</div>
		<div class="p-section sm:pt-[76px] pt-[16px]">
			<div
				v-motion
				:initial="{ opacity: 0, x: -100 }"
				:visible-once="{ opacity: 1, x: 0 }"
				:duration="800"
				:delay="200"
				class="sm:p-[55px] p-[26px] rounded-[20px] bg-white flex sm:flex-row flex-col items-center mb-4 max-w-[1060px] mx-auto"
			>
				<div class="w-[250px] sm:text-left text-center sm:mb-0 mb-6">
					<img class="sm:mx-0 mx-auto" src="/images/partner/1.svg" alt="" />
				</div>
				<div class="max-w-[515px]">
					<h3
						class="font-medium sm:text-[16px] text-[14px] mb-4 sm:text-left text-center"
					>
						Высокие бонусы
					</h3>
					<p>
						Вы получаете до 35% от стоимости каждого полиса, который был куплен
						по вашей рекомендации. <br />
						<span class="opacity-50"
							>К примеру: юридический полис “Международный бизнес” стоит
							$750/год, с него вы зарабатываете $260.</span
						>
					</p>
				</div>
			</div>

			<div
				v-motion
				:initial="{ opacity: 0, x: -100 }"
				:visible-once="{ opacity: 1, x: 0 }"
				:duration="800"
				:delay="200"
				class="sm:p-[55px] p-[26px] rounded-[20px] bg-white flex sm:flex-row flex-col items-center mb-4 max-w-[1060px] mx-auto"
			>
				<div class="w-[250px] sm:mb-0 mb-6">
					<img class="sm:mx-0 mx-auto" src="/images/partner/2.svg" alt="" />
				</div>
				<div class="max-w-[515px]">
					<h3
						class="font-medium sm:text-[16px] text-[14px] mb-4 sm:text-left text-center"
					>
						Полезный продукт
					</h3>
					<p>
						Сервис ILC — это ваша личная команда юристов, которая работает в
						формате “здесь и сейчас”, 24/7, без выходных.
						<br />
						Нужна помощь? Всего 1 клик и персональный юрист ILC уже решает ваш
						вопрос.
						<strong>
							Это в несколько раз дешевле и быстрее, чем искать частного
							специалиста.
						</strong>
					</p>
				</div>
			</div>

			<div
				v-motion
				:initial="{ opacity: 0, x: -100 }"
				:visible-once="{ opacity: 1, x: 0 }"
				:duration="800"
				:delay="200"
				class="sm:p-[55px] p-[26px] rounded-[20px] bg-white flex sm:flex-row flex-col items-center mb-4 max-w-[1060px] mx-auto"
			>
				<div class="w-[250px] sm:mb-0 mb-6">
					<img class="sm:mx-0 mx-auto" src="/images/partner/3.svg" alt="" />
				</div>
				<div class="max-w-[515px]">
					<h3
						class="font-medium sm:text-[16px] text-[14px] mb-4 sm:text-left text-center"
					>
						Широкая аудитория
					</h3>
					<p>
						Качественная юридическая помощь нужна абсолютно всем: бизнесу,
						семьям, крупным компаниям, экспертам и частным лицам. <br />
						Рекомендуя полис ILC, <strong>вы помогаете людям</strong> оперативно
						решать жизненные задачи в 1 клик.
					</p>
				</div>
			</div>
			<div
				v-motion
				:initial="{ opacity: 0, x: -100 }"
				:visible-once="{ opacity: 1, x: 0 }"
				:duration="800"
				:delay="200"
				class="sm:p-[55px] p-[26px] rounded-[20px] bg-white flex sm:flex-row flex-col items-center mb-4 max-w-[1060px] mx-auto"
			>
				<div class="w-[250px] sm:mb-0 mb-6">
					<img class="sm:mx-0 mx-auto" src="/images/partner/4.svg" alt="" />
				</div>
				<div class="max-w-[515px]">
					<h3
						class="font-medium sm:text-[16px] text-[14px] mb-4 sm:text-left text-center"
					>
						Обучение и поддержка
					</h3>
					<p>
						Вы получите доступ в личный кабинет с подробной информацией о том,
						как:
					</p>
					<ul
						class="list-disc pl-5 flex flex-col gap-2 my-5 sm:text-[14px] text-[12px]"
					>
						<li>эффективно привлекать клиентов</li>
						<li>отслеживать конверсию</li>
						<li>повышать свой доход</li>
						<li>обналичивать средства и многое другое</li>
					</ul>
					<strong class="sm:text-[14px] text-[12px]"
						>Мы поддержим вас на всех этапах</strong
					>
				</div>
			</div>
			<button class="button mx-auto mt-[30px]">Стать партнером</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Partner',
})
</script>

<style scoped></style>
