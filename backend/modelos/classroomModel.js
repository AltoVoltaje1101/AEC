const {google} = require('googleapis');

//credenciales
const jsonData= require('../credentials.json'); 

const clientID =jsonData.web.client_id
const clientSecret=jsonData.web.client_secret
const redirectURL="https://developers.google.com/oauthplayground"
const refreshToken="1//04gqNCB0Wnlv9CgYIARAAGAQSNwF-L9IribBNL6mUc0VE03r4xTzoMgS6oceALvTPHwj5v6YIgy_KTsCGLMiSecGgpNKyv8I_K1Y"

//crea un cliente auth
const oauth2Client=new google.auth.OAuth2(
    clientID,
    clientSecret,
    redirectURL,
)
oauth2Client.setCredentials({refresh_token: refreshToken})

//crea un cliente de classroom
const classroom = google.classroom({
    version: 'v1', 
    auth: oauth2Client
})
//obtiene los cursos
const getCourses = async function(){
    try{
        const res = await classroom.courses.list()
        const courses=[]
        res.data.courses.forEach(curso=>{
          courses.push(curso.name);
        })
        return res.data.courses //regresa los nombre de los cursos
          
    }
    catch(error){
        console.log(error)
    }

}
//aun no se prueba
async function getStudents(){
  try{
      const res = await classroom.students()
      const courses=[]
      console.log(res.data)
      //res.data.courses.forEach(curso=>{
        //console.log(curso);
      //})
        
  }
  catch(error){
      console.log(error)
  }

}
module.exports.getCourses=getCourses;
