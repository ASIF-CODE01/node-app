   console.log("==read the file and file explore==");

   const fs = require(`fs`)
   
   fs.readFile(`sample.txt`,'utf-8',(err,data)=>{

    if (err) {
        console.log(err);
        
        
    }
    console.log(data);
        
   })