
const drive= require("../modelos/driveModel");
const classroom= require("../modelos/classroomModel"); 


//crea la evidencia, falta el link de la evidencia
const createEvidence = async function(courseId,courseWorkId){
    try{
        const studentsWorks = await classroom.getStudentsWorks(courseId,courseWorkId)
        const tarea = await classroom.getWork(courseId,courseWorkId)
        const curso= await classroom.getCourse(courseId)
        const limite = studentsWorks.studentSubmissions.length
        alumnos=[]
        alumnos.push(["Nombre", "Calificacion"])
        for(var i=0;i<limite; i++){
            alumno=[]
            userId= studentsWorks.studentSubmissions[i].userId
            nombre = await classroom.getStudent(userId)
            alumno.push(nombre.fullName)
            alumno.push(studentsWorks.studentSubmissions[i].assignedGrade)
            alumnos.push(alumno)
        }
        nombreDocumento=curso.name+"-"+tarea.title
        const res=await drive.createExcel(nombreDocumento,alumnos)
        return res
    }
    catch(error){
        console.log(error)
    }   
}



module.exports.createEvidence=createEvidence;