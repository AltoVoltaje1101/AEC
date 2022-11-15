const {google} = require('googleapis');

//credenciales
const credenciales= require('../credentials.json');

const clientID =credenciales.web.client_id
const clientSecret=credenciales.web.client_secret
const redirectURL="https://developers.google.com/oauthplayground"

//obtiene los cursos
const getCourses = async function(){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
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
        const res = await classroom.courses.list()
        return res.data.courses //regresa los nombre de los cursos
          
    }
    catch(error){
        console.log(error)
    }

}
const getCourse = async function(courseId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
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
        const res = await classroom.courses.get({
            id: courseId,
          });
        return res.data
    }
    catch(error){
        console.log(error)
    }

}
//devuelve las tareas de un curso
const getWorks = async function(courseId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
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
        console.log(courseId)
        const res = await classroom.courses.courseWork.list({
            courseId: courseId,
        });
        return res.data.courseWork;
    }
    catch(error){
        console.log(error)
    }
}
const getWork = async function(courseId,courseWorkId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
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
        const res = await classroom.courses.courseWork.get({
            courseId: courseId,
            id: courseWorkId
        });
        return res.data;
    }
    catch(error){
        console.log(error)
    }
}
//devuelve el trabajo de todos los alumnos
const getStudentsWorks = async function(courseId, courseWorkId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
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
        const res = await classroom.courses.courseWork.studentSubmissions.list({
            courseId: courseId,
            courseWorkId: courseWorkId
        })
        return res.data
    }
    catch(error){
        console.log(error)
    }
}

//obtiene el nombre del alumno
const getStudent= async function(userId){
  try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
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
    const res = await classroom.userProfiles.get({
        userId: userId,
    });
    console.log(res.data)
    return res.data.name;
        
  }
  catch(error){
      console.log(error)
  }

}
module.exports.getStudent=getStudent;
module.exports.getStudentsWorks=getStudentsWorks;
module.exports.getCourses=getCourses;
module.exports.getWorks=getWorks;
module.exports.getWork=getWork;
module.exports.getCourse =getCourse 
