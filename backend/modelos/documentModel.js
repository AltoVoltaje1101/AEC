const excel = require('excel4node')
const drive= require("../modelos/driveModel");
const classroom= require("../modelos/classroomModel"); 

//Se supone que esta pagina realiza los formularios pero no esta lista

const folderID = '1g1c8AG6lr0M2pEUwUmcnLmFgGj3ME4ne'

//cambiar a google sheets
const createEvidence = async function(courseId,courseWorkId){
    try{
        const alumnos = await classroom.getStudentsWorks(courseId,courseWorkId)
        const tarea = await classroom.getWork(courseId,courseWorkId)
        //crear archivo excel
        const {book,sheet,style1,style2} = createExcel()
        sheet.cell(1,1).string(tarea.title).style(style2)
        const limite = alumnos.studentSubmissions.length
        for(var i=0;i<limite; i++){
            calificacion= alumnos.studentSubmissions[i].assignedGrade
            userId= alumnos.studentSubmissions[i].userId
            nombre = await classroom.getStudent(userId)
            sheet.cell(i+3,1).string(nombre.fullName).style(style1)
            sheet.cell(i+3,2).number(calificacion).style(style1)
        }
        nombre = tarea.title+".xls"
        nombre=nombre.trim()
        //await save(nombre, book)
        //nombre.trim()
        book.write(nombre)
        setTimeout(async function(){
            await drive.uploadFile(nombre,'application/vnd.ms-excel')
        },5000)
    }
    catch(error){
        console.log(error)
    }
}


const createExcel = function(){
    const book=new excel.Workbook()
    const sheet = book.addWorksheet("Evidencia")
    const style1 = book.createStyle({
        font:{
            color: "#040404",
            size: 12
        }
    })
    const style2 = book.createStyle({
        font:{
            color: "#388813",
            size: 12
        }
    })
    sheet.column(1).setWidth(40)
    sheet.column(2).setWidth(15)
    sheet.cell(2,1).string("Nombre").style(style2)
    sheet.cell(2,2).string("Calificacion").style(style2)
    sheet.cell(2,3).string("Evidencia").style(style2)
    return {book,sheet,style1,style2}
}


module.exports.createEvidence=createEvidence;