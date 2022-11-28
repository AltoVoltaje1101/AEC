<template>
    <v-simple-table light>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Competencia
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in atributos"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.competencia }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: "atributos",
    data: () => ({
      atributos: []

    }),
    created () {
      this.initialize()
    },
    methods: {
        async initialize() {
            const res = await this.$axios.get("https://localhost:4001/atributos")
            this.atributos = res.data
            console.log(this.courses)
        }
    }
  }
  </script>