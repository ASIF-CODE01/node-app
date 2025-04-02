// const { log } = require('console'); 
// const url = require('url'); 
// const formattedUrl = url.format({ 
//     protocol: "https:", 
//     hostname: "www.example.com", 
//     pathname: "/path", 
//     query: { 
//         query1: "value", 
//         query2: "value", 
//     }, 
// }); 

// console.log(formattedUrl);

// console.log("protocol", formattedUrl.protocol);
// console.log("hostname:",formattedUrl.hostname);
// console.log("pathname:",formattedUrl.pathname);

const { URL } = require('url');

const myUrl = new URL("https://www.codemind.com/path?query1=value1&query2=value2");

console.log("Protocol:", myUrl.protocol); // https:
console.log("Host:", myUrl.host); // www.example.com
console.log("Pathname:", myUrl.pathname); // /path
console.log("Query Params:", Object.fromEntries(myUrl.searchParams)); // { query1: 'value1', query2: 'value2' }
console.log("Full URL:", myUrl.href); // 


