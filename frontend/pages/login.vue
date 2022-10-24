<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card shaped elevation ="15" color="green"> 
          <v-card-text>
            <center>
              <!--<v-btn color="red" @click="login" to="/">
                <v-icon
                  dark
                  left
                >
                  mdi-google
                </v-icon>
                Sing in with Google 
              </v-btn>-->
              <div id="googleButton"></div>
            </center>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default 
  {
    name: 'login',
    layout: 'loginLayout',
  }
  </script>
   