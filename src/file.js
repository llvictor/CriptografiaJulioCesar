const fs = require('fs');
const axios = require('axios');

exports.saveFile = function(content) {
    var fs = require('fs');
  fs.writeFile('./answer.json', content, function(err) {
    if(err) {
      console.log(err);
    } else {
    }
  });
};

exports.sendFile = function() {

    const request = require('request');
    var formData = {
        'answer': fs.createReadStream('../answer.json'),
    };
    var uploadOptions = {
        "url": "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=fb6e0539e1828dbfd01d48d973a2419c24d1f883",
        "method": "POST",
        "headers": {
            'Content-Type': 'multipart/form-data'
        },
        "formData": formData
    }
    var req = request(uploadOptions, function(err, resp, body) {
        if (err) {
            console.log('Error ', err);
        } else {
            console.log('upload successful', body)
        }
    });
};