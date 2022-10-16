<template>
    <v-data-table
      :headers="headers"
      :items="courses"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </template>

<script>
export default {
  methods:{
    getCourses(){
      
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Materia',
          align: 'start',
          sortable: false,
          value: 'name',
        }
      ],
    }
  },
}
</script>