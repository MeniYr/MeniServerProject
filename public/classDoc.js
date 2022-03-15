// const { json } = require("express/lib/response")
class CreateInfo {
    constructor(_parent,_data) {
        this.parent = _parent
        this.data = _data
    }
    render() {
        document.querySelector("#yg").innerHTML = `
       ${this.data}
       `
    }


    

    }
export default CreateInfo;