class Form {

    #html = `<form method="POST" action "/"><input name="Say somthing" type="text"><button type="submit"> Press Me!</button> </form>`;
    get getHtml() {
        return this.#html
    };

}


export { Form }