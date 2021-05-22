<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-md-3 me-3">
          <h3><b>Gurpo:</b> <br> ITIT 06</h3>
        </div>
        <div class="col-md-4 ">
          <h3><b>Nombre del Estudiante:</b> <br> Alfredo García Yapor</h3>
        </div>
        <div class="col-md-3 me-3 ">
          <h3 class="" ><b>Matrícula:</b> <br> 8180</h3>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

