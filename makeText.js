const fs = require('fs');
const markov = require("./markov")
const process = require('process')
const axios = require('axios')

function generateText(text) {
    let mm = new markov.MarkovMachine(text)
    console.log(mm.makeText)
}




function makeTextPath (path) {
fs.readFile(path, 'utf8', function(err,data) {
    if (err) {
       console.error(`Error reading ${path}:${err}`);
       process.kill(1)
    } 
    else {
      generateText(data)  
    }
       
})
}

 async function makeTextUrl (url){
    try {
      let res = await axios.get (url);
      console.log(res.data);
    }
    catch (err){
        console.error(`Error fetching ${url}:${err}`);
       process.kill(1)
    }
    generateText(res.data)
}

let [method,path] = process.argv.slice(2);

if (method === "file") {
    makeTextPath(path);
}
else if (method === "url") {
   makeTextUrl(url);
}
else{
    console.error(`Error with method: ${method}`);
    process.kill(1)
}