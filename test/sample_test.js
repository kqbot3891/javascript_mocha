let chai = require('chai');
let chaiHttp = require('chai-http');
let chaiJsonEqual = require('chai-json-equal');
let should = chai.should();
let expect = chai.expect;
let proxy = require('./proxy/proxy.js');

chai.use(chaiHttp);
chai.use(chaiJsonEqual);

describe('Employees', function() {

    it('/GET Employee 1 - should', function (done) {
        proxy.employee1.getEmployee()
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property('status').is.equal("success");
              done();
            })
    })

    it('/GET Employee 2 - should', function (done) {
        proxy.employee2.getEmployee()
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status').is.equal("success");
                done();
            })
    })

})