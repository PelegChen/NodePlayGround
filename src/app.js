import { Form } from './from.mjs'
import http from 'http';

var chunknumber = 0

const server = http.createServer((request, response) => {
    const data = [];

    let body;
    request.on('data', (chunk) => {
        chunknumber = chunknumber + 1;
        console.log('chunk ' + chunknumber, chunk);
        data.push(chunk)

    })
    request.on('end', () => {
        console.log('end request')
        body = Buffer.concat(data).toString();

    })

    response.setHeader('Content-Type', 'text/html');
    let f = new Form();
    let text = f.getHtml

    response.write(text);
    response.end();
})
server.listen(4000);
