<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <UABCLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Bienvenido al Sistema de Recolección Automático de Evidencias
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="guardar"> Guardar en Drive </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  methods: {
    guardar(){
      axios.post("https://localhost:4000/save").then((r) => {
        console.log(r.data)
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
