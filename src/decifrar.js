const alfa  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

exports.exec = function(cifrado, casas) {
    let decifrado = '';
    
    for(let i = 0; i < cifrado.length; i++) {
      let match = alfa.indexOf(cifrado[i]);
      if(match > -1) {
        if(match - casas >= 0) {
          decifrado += alfa[(match - casas) % alfa.length];
        }
        else {
          decifrado += alfa[alfa.length - match - casas];
        }
      } else {
        decifrado += cifrado[i];
      }
    }
    return decifrado;
};