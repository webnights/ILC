<template>
  <div class='wrapper'>
    <header>
      <Header/>
    </header>
    <main>
      <RouterView/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default defineComponent({
	name: 'App',
  components: {Header, Footer}
})
</script>

