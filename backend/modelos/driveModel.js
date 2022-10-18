const fs = require('fs')
const {google} = require('googleapis')

//credenciales
const jsonData= require('../credentials.json'); 

const clientID =jsonData.web.client_id
const clientSecret=jsonData.web.client_secret
const redirectURL="https://developers.google.com/oauthplayground"
const refreshToken="1//04osmi6rBFFWHCgYIARAAGAQSNwF-L9IrrK4jAYBvYZgbcjfQwDB9vLuARPmBsNLrMcpzbgUjjrWabJ9254MHcU8pjvrsfNsCy7o"
const folderID = '1g1c8AG6lr0M2pEUwUmcnLmFgGj3ME4ne'

//crea el cliente auth
const oauth2Client=new google.auth.OAuth2(
    clientID,
    clientSecret,
    redirectURL
)
oauth2Client.setCredentials({refresh_token: refreshToken})

//crea el cliente de drive
const drive =google.drive({
    version: 'v3',
    auth: oauth2Client 
})

//sube un archivo a drive
const uploadFile =async function(){
    try{
        //crea el archivo a drive con sus caracteristicas
        const response = await drive.files.create({
            requestBody: {
                name: "TestPDF",
                parents: [folderID],
                mimeType: "application/pdf"
            },
            media: {
                mimeType: "application/pdf",
                body:  fs.createReadStream('./test.pdf')
            },
        })
        //console.log(response.data.id)
        return response.data.id
    }
    catch(error){
        console.log(error)
    }
}

const generateURL= async function(fileId){
    try{
        await drive.permissions.create({
        fileId: fileId,
        requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    //console.log(result.data.webViewLink)
    return result.data.webViewLink;
    }
    catch(error){
        console.log(error)
    }
}

module.exports.uploadFile=uploadFile;
module.exports.generateURL=generateURL;