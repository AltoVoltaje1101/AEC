<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <br>
        <v-card class="logo py-4 d-flex justify-center">
          <v-img 
          v-bind:src="imagen"
          height="200"
          max-width="200"
          ></v-img>
        </v-card>
        <br><br>
        <v-card>
          <v-card-title class="headline" align="center" >
            Perfil de usuario
          </v-card-title>
          <v-card-text>
              Nombre: {{nombre}}
              <br> 
              Correo: {{correo}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'perfil',
    data: () => ({
        nombre: '',
        imagen: '',
        correo: ''
    }),
    created() {
        this.initialize();
    },
    methods: {
        async initialize() {
          console.log(this.$store.state.token)
            const res = await this.$axios.post("https://localhost:4001/courses/teacher",{
              "token": this.$store.state.token
            })
            const teacherUser = res.data
            this.nombre=teacherUser.displayName
            this.correo=teacherUser.emailAddress
            this.imagen=teacherUser.picture.url
            console.log(this.imagen)
        }
    }
  }
  </script>