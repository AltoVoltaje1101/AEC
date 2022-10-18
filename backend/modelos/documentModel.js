const fs = require('fs')
const {google} = require('googleapis')

//Se supone que esta pagina realiza los formularios pero no esta lista

const folderID = '1g1c8AG6lr0M2pEUwUmcnLmFgGj3ME4ne'

async function uploadFile(){
  try{
      const auth = new google.auth.GoogleAuth({
          keyFile: './googleKey.json',
          scopes: ['https://www.googleapis.com/auth/drive']
      })

      const driveService= google.drive({
          version: 'v3',
          auth 
      })

      const fileMetaData = {
          'name': 'test.pdf',
          'parents': [folderID]
      }

      const media ={
          mimeType: 'application/pdf',
          body: fs.createReadStream('./Test.pdf')
      }

      const response = await driveService.files.create({
          resource: fileMetaData,
          media: media,
          field: 'id'
      })
      return response.data.id
  }
  catch(err){
      console.log('Error al subir el archivo ', err)
  }
}

const saveDocument = async function(){ //obtiene todas las propiedades
  uploadFile().then(data=>{
    return data;
  })
};


module.exports.saveDocument=saveDocument;