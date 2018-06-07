const express = require('express')
const https = require('https');
const jsonGeneratorUrl = process.argv[2] || "https://next.json-generator.com/api/json/get/NJ0TbNWgB"

const app = express()

app.use(express.static("public"))

app.get('/users', function (req, res) {
  https.get(jsonGeneratorUrl, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
   
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(data)
    });
   
   }).on("error", (err) => {
    console.log("Error: " + err.message);
   });
})

app.listen(3000, () => console.log("app is running on port 3000"))


