
<template>
  <v-data-table light :headers="headers" :items="courses" :items-per-page="5" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Materias Classroom</v-toolbar-title>
        <v-dialog v-model="dialog" max-width="700px">
          <v-card>
            <v-card-title class="text-h5">Tareas Classroom</v-card-title>
            <v-data-table :headers="headersTareas" :items="tareas" :items-per-page="5" class="elevation-1">
              <template v-slot:top>
                <v-dialog v-model="dialogEvidencia" max-width="700px">
                  <v-card>
                    <v-card-title class="text-h5">Evidencia creada</v-card-title>
                    <v-card-text>
                      La evidencia se creó exitosamente en su cuenta de drive.
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green" text @click="dialogEvidencia = false">Aceptar</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="generarReporte(item)" color="blue" class="mr-2" v-bind="attrs" v-on="on">
                      mdi-file-word-box
                    </v-icon>
                  </template>
                  <span>Generar Reporte</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="generarEvidencia(item)" color="green" class="mr-2" v-bind="attrs" v-on="on">
                      mdi-file-excel
                    </v-icon>
                  </template>
                  <span>Generar Evidencia</span>
                </v-tooltip>
              </template>
            </v-data-table>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="cerrarTareas">Cerrar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon @click="verTareas(item)" color="blue" class="mr-2" v-bind="attrs" v-on="on">
            mdi-pencil
          </v-icon>
        </template>
        <span>Tareas</span>
      </v-tooltip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon @click="verTareas(item)" color="blue" class="mr-2" v-bind="attrs" v-on="on">
            mdi-pencil
          </v-icon>
        </template>
        <span>Tareas</span>
      </v-tooltip>
    </template>

  </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    dialog: false,
    dialogEvidencia: false,
    headers: [
      {
        text: 'Materia',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    headersTareas: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      { text: "Estatus", value: "state" },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    courses: [],
    tareas: [],
    curso: null,
    tarea: null,
    link: null,
  }),
  created() {
    this.initialize();

  },
  methods: {
    async initialize() {
      const res = await this.$axios.post("https://localhost:4001/courses",{
        "token": this.$store.state.token
      })
      this.courses = res.data
      console.log(this.courses)
    },
    async verTareas(item) {
      this.curso = item
      const res = await this.$axios.post('https://localhost:4001/courses/courseWorks',
        {
          "courseId": this.curso.id,
          "token": this.$store.state.token
        })
      this.tareas = res.data
      this.dialog = true
    },
    async generarEvidencia(item) {
      this.tarea = item
      const data = await this.$axios.post('https://localhost:4001/document/evidence',
        {
          "courseId": this.curso.id,
          "courseWorkId": this.tarea.id,
          "token": this.$store.state.token
        })
      console.log(data)
      this.dialogEvidencia = true
    },
    generarReporte(item) {
      console.log(item)
    },
    cerrarTareas() {
      this.dialog = false
    },
  }

}
</script>