const axios = require('axios');
const sha1 = require('js-sha1');
const decifrar  = require('./src/decifrar');
const file = require('./src/file');

axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data', {
  params: {
    token: 'fb6e0539e1828dbfd01d48d973a2419c24d1f883'
  }
})
.then(res => {
  let response = res.data;

  let cifrado = response.cifrado.toLowerCase();
  let casas = response.numero_casas;
  
  let decifrado = decifrar.exec(cifrado, casas);
  let resumo_criptografico = sha1(decifrado);

  response.decifrado = decifrado;
  response.resumo_criptografico = resumo_criptografico;

  file.saveFile(JSON.stringify(response));
  file.sendFile();
})
.catch(error => {
  console.log('error:' + error);
})