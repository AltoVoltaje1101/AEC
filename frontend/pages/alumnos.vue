
<template>
    <v-data-table :headers="headers" :items="students" :items-per-page="5" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-toolbar>
      </template>
  
    </v-data-table>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data: () => ({
      headers: [
        {
          text: 'Estudiante',
          align: 'start',
          sortable: false,
          value: 'name',
        },
      ],
      students: []
    }),
    created() {
      this.initialize();
  
    },
    methods: {
      initialize() {
        this.$axios.get("https://localhost:4000/students").then((r) => {
          this.courses = r.data
        })
        console.log(this.courses)
      }
    }
  
  }
  </script>