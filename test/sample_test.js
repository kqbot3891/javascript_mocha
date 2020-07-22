let chai = require('chai');
let chaiHttp = require('chai-http');
let chaiJsonEqual = require('chai-json-equal');
let should = chai.should();
let expect = chai.expect;
let proxy = require('./proxy/proxy.js');

chai.use(chaiHttp);
chai.use(chaiJsonEqual);

describe('Sample Test Suite', function() {

    describe('Albums Tests', function () {

        it('/GET Albums - should', function (done) {
            proxy.album.get()
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.have.lengthOf(100);
                  console.log(res.body)
                  done();
                })
        })

    })

    describe('Comments Tests', function () {

        it('/GET Comments', function (done) {
            proxy.comment.get()
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(500);
                    console.log(res.body)
                    //expect(res.body).to.have.property('status').is.equal("success");
                    //expect(res.body).to.have.property('data').to.be.lengthOf(24);
                    done();
                })
        })

        it('/GET Comments by post id', function (done) {
            proxy.comment.getByPostId(1)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(5);
                    console.log(res.body)
                    done();
                })
        })
        
    })

    describe('Photos Tests', function () {

        it('/GET Photos - should', function (done) {
            proxy.photo.get()
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(5000);
                    console.log(res.body)
                    done();
                })
        })

    })

    describe('Posts Tests', function () {

        it('/GET Posts - should', function (done) {
            proxy.post.get()
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(100);
                    console.log(res.body)
                    done();
                })
        })

        it('/GET Comments by Post Id - should', function (done) {
            proxy.post.getCommentsByPostId(1)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(5);
                    console.log(res.body)
                    //expect(res.body).to.have.property('status').is.equal("success");
                    //expect(res.body).to.have.property('data').to.be.lengthOf(24);
                    done();
                })
        })

        it('/GET Comments by User Id', function (done) {
            proxy.post.getByUserId(1)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(10);
                    //expect(res.body).to.have.property('status').is.equal("success");
                    //expect(res.body).to.have.property('data').to.be.lengthOf(24);
                    console.log(res.body)
                    done();
                })
        })

        it('/POST post', function (done) {
            var postPayload = {
                title:"Hello",
                body:"World",
                userId:1
            };
            proxy.post.post(postPayload)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body.title).is.equal(postPayload.title);
                    expect(res.body.body).is.equal(postPayload.body);
                    expect(res.body.userId).is.equal(postPayload.userId);
                    console.log(res.body)
                    done();
                })
        })

        it('PUT', function (done) {
            var postPayload = {
                title:"Hello",
                body:"World",
                userId:1
            };
            proxy.post.put(1, postPayload)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.title).is.equal(postPayload.title);
                    expect(res.body.body).is.equal(postPayload.body);
                    expect(res.body.userId).is.equal(postPayload.userId);
                    console.log(res.body)
                    done();
                })
        })

        it('PATCH', function (done) {
            var postPayload = {
                title:"Hello",
                body:"World",
                userId:1
            };
            proxy.post.patch(1, postPayload)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.title).is.equal(postPayload.title);
                    expect(res.body.body).is.equal(postPayload.body);
                    expect(res.body.userId).is.equal(postPayload.userId);
                    console.log(res.body)
                    done();
                })
        })

        it('DELETE', function (done) {
            proxy.post.delete(1)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                })
        })

    })

    describe('ToDos Tests', function () {

        it('/GET ToDos - should', function (done) {
            proxy.todo.get()
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(200);
                    console.log(res.body)
                    done();
                })
        })

    })

})