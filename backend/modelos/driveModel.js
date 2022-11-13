const fs = require('fs')
const {google} = require('googleapis')

//credenciales
const credenciales= require('../credentials.json'); 

const clientID =credenciales.web.client_id
const clientSecret=credenciales.web.client_secret
const redirectURL="https://developers.google.com/oauthplayground"
//crea el cliente auth

//crea un archivo en excel
const createExcel=async function(nombre,alumnos){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
        const oauth2Client=new google.auth.OAuth2(
            clientID,
            clientSecret,
            redirectURL
        )
        oauth2Client.setCredentials({refresh_token: refreshToken})
        
        //crea el cliente de drive
        
        const sheets =google.sheets({
            version: 'v4',
            auth: oauth2Client 
        })
        const spreadsheet = await sheets.spreadsheets.create({
            requestBody: {
                 "properties": {"title": nombre},
            },
        })
        const id=spreadsheet.data.spreadsheetId
        await sheets.spreadsheets.values.append({
            spreadsheetId: id,
            range: "Hoja 1!A:C",
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            resource: {
                "values": alumnos
            }
        })
        const res = await sheets.spreadsheets.get({
            spreadsheetId: id
          });
        return res.data
    }
    catch(error){
        console.log(error)
    }
}
//sube un archivo a drive
const uploadFile =async function(name,mimeType){
    const route = './'+name
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
        const oauth2Client=new google.auth.OAuth2(
            clientID,
            clientSecret,
            redirectURL
        )
        oauth2Client.setCredentials({refresh_token: refreshToken})
        const drive =google.drive({
            version: 'v2',
            auth: oauth2Client 
        })
        //crea el cliente de drive
        
        //crea el archivo a drive con sus caracteristicas
        const response = await drive.files.create({
            requestBody: {
                name: name,
                parents: [folderID],
                mimeType: mimeType
            },
            media: {
                mimeType: mimeType,
                body:  fs.createReadStream(route)
            },
        })
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

const generateURL= async function(fileId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
        const oauth2Client=new google.auth.OAuth2(
            clientID,
            clientSecret,
            redirectURL
        )
        oauth2Client.setCredentials({refresh_token: refreshToken})
        const drive =google.drive({
            version: 'v2',
            auth: oauth2Client 
        })
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
    return result.data.webViewLink;
    }
    catch(error){
        console.log(error)
    }
}
//mueve un archivo a una carpeta especidifcada
const moveFolder = async function(folderId,fileId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
        const oauth2Client=new google.auth.OAuth2(
            clientID,
            clientSecret,
            redirectURL
        )
        oauth2Client.setCredentials({refresh_token: refreshToken})
        const drive =google.drive({
            version: 'v2',
            auth: oauth2Client 
        })
        const res = await drive.parents.insert({
            fileId: fileId,
            requestBody: {
                "id": folderId
            }
        });
        return res
    }
    catch(error){
        console.log(error)
    }

}
const createPermissions=async function(fileId){
    try{
        const token= require('../token.json');
        const refreshToken=token.refresh_token
        const oauth2Client=new google.auth.OAuth2(
            clientID,
            clientSecret,
            redirectURL
        )
        oauth2Client.setCredentials({refresh_token: refreshToken})
        const drive =google.drive({
            version: 'v2',
            auth: oauth2Client 
        })
          const res = await drive.permissions.insert({
            fileId: fileId,
            requestBody: {
                'value': "default",
                'type': "anyone",
                'role': "writer"
            }
          });
          return res
    }
    catch(error){
        console.log(error)
    }
}
module.exports.createPermissions=createPermissions
module.exports.moveFolder=moveFolder;
module.exports.uploadFile=uploadFile;
module.exports.generateURL=generateURL;
module.exports.createExcel=createExcel