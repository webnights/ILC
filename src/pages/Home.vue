<template>
	<div>
		<Hero/>
		<About />
		<Help />
		<Advantages />
		<Tarrifs />
		<Partner />
		<EasyStart />
		<Forecasts />
		<Manager/>
	</div>
</template>

<script>
import About from '@/components/About.vue'
import Advantages from '@/components/Advantages.vue'
import EasyStart from '@/components/EasyStart.vue'
import Forecasts from '@/components/Forecasts.vue'
import Help from '@/components/Help.vue'
import Hero from '@/components/Hero.vue'
import Partner from '@/components/Partner.vue'
import Tarrifs from '@/components/Tarrifs.vue'
import Manager from '@/components/Manager.vue'
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Home',
	components: {
		Hero,
		About,
		Help,
		Advantages,
		Tarrifs,
		Partner,
		EasyStart,
		Forecasts,
		Manager
	},
})
</script>

<style scoped></style>
