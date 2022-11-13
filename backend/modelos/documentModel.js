
const drive= require("../modelos/driveModel");
const classroom= require("../modelos/classroomModel"); 


//crea la evidencia, falta el link de la evidencia
const createEvidence = async function(courseId,courseWorkId){
    try{
        const folderID = '1g1c8AG6lr0M2pEUwUmcnLmFgGj3ME4ne'
        const studentsWorks = await classroom.getStudentsWorks(courseId,courseWorkId)
        const tarea = await classroom.getWork(courseId,courseWorkId)
        const curso= await classroom.getCourse(courseId)
        const limite = studentsWorks.studentSubmissions.length
        alumnos=[]
        alumnos.push(["Nombre", "Calificacion","Evidencia"])
        for(var i=0;i<limite; i++){
            alumno=[]
            userId= studentsWorks.studentSubmissions[i].userId
            nombre = await classroom.getStudent(userId)
            alumno.push(nombre.fullName)
            alumno.push(studentsWorks.studentSubmissions[i].assignedGrade)
            evidencias=studentsWorks.studentSubmissions[i].assignmentSubmission.attachments
            if(typeof(evidencias)=="object"){ 
                evidencia=evidencias[0].driveFile.alternateLink
            }
            else{evidencia= "null"}
            alumno.push(evidencia);
            alumnos.push(alumno)
        }
        nombreDocumento=curso.name+"-"+tarea.title
        const documento=await drive.createExcel(nombreDocumento,alumnos)
        await drive.createPermissions(documento.spreadsheetId)
        const res= await drive.moveFolder(folderID,documento.spreadsheetId)
        return documento
    }
    catch(error){
        console.log(error)
    }   
}


module.exports.createEvidence=createEvidence;