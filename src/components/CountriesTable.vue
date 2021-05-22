<template>
    <div>
        <b-container  style="background: white" class="centrar pt-5 pb-5">
            <b-row>
                <b-col lg="3" class="my-1">
                  <b-form-group label="Filtro" label-cols-sm="3" label-align-sm="right" label-size="sm" label-for="filterInput" class="mb-4">
                    <b-input-group size="sm ms-3">
                      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Escribe para buscar" style="border-radius: 20px"></b-form-input>
                      <b-input-group-append>
                        <b-button class="btn-limpiar ms-2" style="border-radius: 20px" @click="filter = ''" >Limpiar</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
            </b-row>
            <b-table class="mx-3" show-empty small hover stacked="md" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" @filtered="onFiltered">
                <template v-slot:cell(actions)="row">
                    <b-button class="btn-mostrar zoom" size="sm" @click="usuarioRowClick(row)">
                      {{ row.detailsShowing ? "Esconder " : "Mostrar " }} detalles
                    </b-button>
                </template>
                <template v-slot:row-details="row">
                  <b-container v-if="row.item.length == 0">
                    <b-card>
                      <h5>No hay elementos</h5>
                    </b-card>
                  </b-container>
                  <b-container v-if="row.item.length != 0">

                    <b-card>
                        <div class="form-row mt-4">
                            <div class="form-group col-md-3">
                              <h5>Zona horaria:</h5>
                              <li>
                                  <ul v-for="(value, key) in row.item.timezones" :key="key">{{value}}</ul>
                              </li>
                            </div>

                            <div class="form-group col-md-3">
                              <h5>Area (metros cuadrados):</h5>
                              <label for="">{{ row.item.area }} m2 </label>
                            </div>

                            <div class="form-group col-md-3">
                              <h5>Bandera:</h5>
                              <img :src="row.item.flag" alt="bandera del país" style="width:150px; height:125px;">
                              <!-- <label for="">{{ row.item.p[key].email }}</label> -->
                        </div>
                      </div>
                    </b-card>
                  </b-container>
                </template>
            </b-table>

            <b-col sm="10" md="12" class="my-1">
              <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm md" class="my-0"></b-pagination>
            </b-col>
        </b-container>
    </div>
</template>

<script>
import auth from "@/logic/auth";
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
    name:"countriesTable",
    data() {
        return {
            items:[],
            fields:[
                { key: "name", label: "Nombre", sortable: true, class: "text-left"},
                { key: "alpha3Code", label: "Código de tres letras", sortable: true, sortDirection: "desc" },
                { key: "capital",  label: "Cápital",  sortable: true,  class: "text-left" },
                { key: "region", label: "Continente", sortable: true, class: "text-left"},
                { key: "subregion", label: "Región", sortable: true, class: "text-left" },
                { key: "actions", label: "" },
            ],

            totalRows: 1,
            currentPage: 1,
            perPage: 50,
            filter: null,
            filterOn: [],
            sortBy: "",
            sortDesc: false,
            sortDirection: "asc",

        }
    },
    mounted() {
        this.loadTable();
    },
    methods: {
        loadTable(){
            auth.API_GET("/rest/v2").then((response) => {
                
                this.items = response.data;
                this.totalRows = this.items.length;
                console.log(this.items);
            });
        },
        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length;

          this.currentPage = 1;
        },
        usuarioRowClick(row) {
          // console.log(row);
          row.toggleDetails();
          if (this.activeRow != null) {
            if (this.activeRow.index == row.index) {
              this.activeRow = null;
            } else {
              this.activeRow.toggleDetails();
              this.activeRow = row;
              consle.log("caca")
            }
          } else {
            this.activeRow = row;
          }
        },
    },
    
}
</script>