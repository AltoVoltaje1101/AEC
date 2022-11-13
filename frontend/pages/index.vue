<template>
  <v-row justify="center" align="center">
  <v-col cols="12" sm="8" md="6">
    <br><br><br>
    <v-card elevation="9" shaped color="#4169E1" width=550>
      <v-card-title class="headline justify-center">
        <h2>Sign in</h2>
      </v-card-title>
    <br><br>
    <div class="text-center"> 
      <v-card-text>
        <h3>Iniciar sesión con Google</h3>
      </v-card-text>
      <br>
      <v-btn 
      x-large
      @click="login"
      >
      <v-icon
          left
          dark
        >
        mdi-google
        </v-icon>
        Google
      </v-btn>
    <br><br>
    </div>
      <v-dialog v-model="dialogAccept" max-width="500px">
        <v-card>
          <v-card-title>
            Usuario encontrado
          </v-card-title>
          <v-card-text class>
            Bienvenido 
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text to="/inicio">Continuar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import axios from 'axios';
export default {
layout: 'loginLayout',
data: () => ({
  pass: "",
  usuario: "",
  dialogAccept: false
}),
methods: {
  async login(){
    await this.$axios.post("https://localhost:4001/login")
    this.dialogAccept=true

  },
  close (){
      this.dialogAccept=false
  }

},
  watch: {
    dialog (val) {
      val || this.close()
    },
    
  },
}
</script>
   