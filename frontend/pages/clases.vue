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
      }
    ],
    courses: [],
    newCourses:[]
  }),
  created() {
    this.initialize();

  },
  methods: {
    initialize() {
      this.courses = [
        this.$axios.get("https://localhost:4000/courses").then((r) => {
          this.courses = r.data.map(value => {
        return {
          name: value
        }
      })
          console.log("Impresion initialize")
          console.log(this.courses)
        }).catch(error => {
          console.log(error.message);
        }),
        //this.courses = this.courses.map(name =>({name})) 
      ];
      this.convert();
      console.log("Impreison initialize2")
      console.log(this.courses)
    },
    convert() {
      console.log("Impresion convert")
      console.log(this.courses)
      this.newCourses = this.courses.map(value => {
        return {
          name: value
        }
      })
    console.log(this.newCourses)
    }

  },

}
</script>