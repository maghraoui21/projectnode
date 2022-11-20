const http = require('http');

const server= http.createServer((req,res)=>{
  //response object how does it work 
 /* res.statusCode=200
  res.setHeader('Content-Type','text/html')
  res.write('welcome');
  res.end();
*/
/*************************************************************************************************************************** */
//Request how does it work
//this condition will display every time a message depend on the path and it will return ok if the status code 200 and not found if the status code 404 
if (req.url=='/home'){
  res.statusCode=200
  res.write('welcome from home')
}else if(req.url=='/contact'){
  res.statusCode=200
  res.write('welcome from contact')
}else if(req.url=='/about'){
  res.statusCode=200
  res.write('welcome from about')
}else 
{
  res.statusCode=404
  res.write('not found')
}
res.end()

})
 server.listen(3000,()=>{console.log('the server is runing')});