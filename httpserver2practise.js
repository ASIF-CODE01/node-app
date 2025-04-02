
  const http= require('https');

 const httpserver= http.createServer((request,response)=>{

    console.log("i have create the request !");
    console.log("let me response....");
    console.log("hello from server!..."); 

  });

  httpserver.listen(8090,()=>{
    console.log('server started on port');
    
  })
  console.log("my first node app !");
  