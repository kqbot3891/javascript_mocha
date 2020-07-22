let properties = require("../resource/properties");

let chai = require('chai');
let server = properties.serverName;

//Controller
class Employee1 {

    //Endpoint
    static getEmployee() {
        return chai
            .request(server)
                .get("/api/v1/employees");
    }

}

class Employee2 {

    static getEmployee() {
        return chai
            .request(server)
            .get("/api/v1/employees");
    }

}

module.exports = {
    employee1 : Employee1,
    employee2 : Employee2
};
