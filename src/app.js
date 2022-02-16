import { Form } from './from.mjs'
import http from 'http';



const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    let f = new Form();
    let text = f.getHtml
    console.log(text);
    response.write(text);
    response.end();
})
server.listen(4000);
