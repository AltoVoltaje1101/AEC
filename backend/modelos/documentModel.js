
const drive= require("../modelos/driveModel");
const classroom= require("../modelos/classroomModel"); 
const atributos= require("../modelos/atributosModel");

//crea la evidencia, falta el link de la evidencia
const createEvidence = async function(courseId,courseWorkId,token){
    try{
        const folderID = '1g1c8AG6lr0M2pEUwUmcnLmFgGj3ME4ne'
        const studentsWorks = await classroom.getStudentsWorks(courseId,courseWorkId,token)
        const tarea = await classroom.getWork(courseId,courseWorkId,token)
        const curso= await classroom.getCourse(courseId,token)
        const limite = studentsWorks.studentSubmissions.length
        alumnos=[]
        alumnos.push(["Nombre", "Calificacion","Evidencia"])
        for(var i=0;i<limite; i++){
            alumno=[]
            userId= studentsWorks.studentSubmissions[i].userId
            nombre = await classroom.getStudent(userId,token)
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
        const documento=await drive.createExcel(nombreDocumento,alumnos,token)
        await drive.createPermissions(documento.spreadsheetId,token)
        const res= await drive.moveFolder(folderID,documento.spreadsheetId,token)
        return documento
    }
    catch(error){
        console.log(error)
    }   
}
const createReport = async function(courseId,courseWorkId,atributoId,token){
    try{
        let satisfactorio=0
        let noSatisfactorio=0
        let sobresaliente=0
        let total=0
        const studentsWorks = await classroom.getStudentsWorks(courseId,courseWorkId,token)
        studentsWorks.studentSubmissions.forEach(function(student){
            if(student.assignedGrade==100) sobresaliente+=1
            else if(student.assignedGrade<60) noSatisfactorio+=1
            else satisfactorio+=1
            total+=1
        })
        const atributo = await atributos.getById(atributoId)
        const tarea =  await classroom.getWork(courseId,courseWorkId,token)
        const curso= await classroom.getCourse(courseId,token)
        const res = await drive.createDoc(satisfactorio,noSatisfactorio,sobresaliente,total,atributo,tarea, curso,token)
        return res
        
    }
    catch(error){
        console.log(error)
    }
}


module.exports.createEvidence=createEvidence;
module.exports.createReport=createReport;