const {google} = require('googleapis');

const clientID ="370567829666-cpfrgg6jr7i6a13d4cqms6geprg8jplf.apps.googleusercontent.com"
const clientSecret="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"
const redirectURL="https://developers.google.com/oauthplayground"
const refreshToken="1//04gqNCB0Wnlv9CgYIARAAGAQSNwF-L9IribBNL6mUc0VE03r4xTzoMgS6oceALvTPHwj5v6YIgy_KTsCGLMiSecGgpNKyv8I_K1Y"

const oauth2Client=new google.auth.OAuth2(
    clientID,
    clientSecret,
    redirectURL,
)
oauth2Client.setCredentials({refresh_token: refreshToken})

const classroom = google.classroom({
    version: 'v1', 
    auth: oauth2Client
})

const getCourses = async function(){
    try{
        const res = await classroom.courses.list()
        const courses=[]
        res.data.courses.forEach(curso=>{
          courses.push(curso.name);
        })
        return courses
          
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
