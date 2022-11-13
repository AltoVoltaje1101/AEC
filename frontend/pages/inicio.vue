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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'inicio',
}
</script>
