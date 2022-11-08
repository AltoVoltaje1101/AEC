const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const fs = require('fs').promises;

const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/classroom.courses.readonly',
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
  'https://www.googleapis.com/auth/classroom.rosters.readonly',
  'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly'

];

const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

const autenticar= async function(){
  const client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  //return client.credentials.refresh_token
  await fs.writeFile("token.json",JSON.stringify(client.credentials));
  console.log(client)
  return client.credentials
}
const borrarToken = async function(){
  await fs.unlink("token.json")
  return "Borrado exitosamente"
}

module.exports.borrarToken=borrarToken
module.exports.autenticar=autenticar