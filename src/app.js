
const http = requier('http');



const server = http.createServer((request, response) => {
    response.write('This is my response');
    response.end();
})
server.listen(4000);
