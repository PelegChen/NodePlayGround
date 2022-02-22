class Form {
    #head = `<head>
    <style>
body {
    background-color : pink;
    font-size : 30px;

}
form {
    font-size : 30px;
    margin : 3em;
}
button {
    background-color : gold;
    border-radius: 10px;
    padding : 1em;
    font-size: 30px;
}
    </style></head>`
    #html = `<body><form method="POST" action "/"><br><input name="Say somthing" type="text"><br><input name="uploadfile" type="file"><br> <button type="submit"> Press Me!</button> </form></body>`;
    get getHtml() {
        return this.#head + this.#html
    };

}


export { Form }