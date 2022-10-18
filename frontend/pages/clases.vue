<template>
  <v-data-table :headers="headers" :items="courses" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    headers: [
      {
        text: 'Materia',
        align: 'start',
        sortable: false,
        value: 'name',
      },
    ],
    courses: []
  }),
  created() {
    this.initialize();

  },
  methods: {
    initialize() {
      this.$axios.get("https://localhost:4000/courses").then((r) => {
        this.courses = r.data
      })
    console.log(this.courses)
    }   
}

}
</script>