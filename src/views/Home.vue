<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Bases de datos II</h2>
    <h4><b>Docente:</b> M.S.I. Francisco Rojero Domínguez</h4>
    <HelloWorld msg="Restcountries"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//componentes
import HelloWorld from '@/components/HelloWorld.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
