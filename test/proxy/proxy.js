let properties = require("../resource/properties");

let chai = require('chai');
let server = properties.serverName;

//https://jsonplaceholder.typicode.com/
class Album {

    static path = "/albums";

    static get() {
        return chai
            .request(server)
            .get(this.path)
    }
}

class Comment {

    static path = "/comments";

    static get() {
        return chai
            .request(server)
            .get(this.path);
    }

    static getByPostId(postId) {
        return chai
            .request(server)
            .get(this.path)
            .query({postId: postId.toString()});
    }

}

class Photo {

    static path = "/photos";

    static get() {
        return chai
            .request(server)
            .get(this.path)
    }

}

class Post {

    static path = "/posts";

    static get() {
        return chai
            .request(server)
            .get(this.path)
    }

    static getCommentsByPostId(postId) {
        return chai
            .request(server)
            .get("/posts/" + postId.toString() + "/comments");
    }

    static getByUserId(userId) {
        return chai
            .request(server)
            .get(this.path)
            .query({userId: userId.toString()});
    }

    static post(payload) {
        return chai
            .request(server)
            .post(this.path)
            .set('content-type', 'application/json')
            .send(JSON.stringify(payload))
    }

    static put(postId, payload) {
        return chai
            .request(server)
            .put(this.path + "/" + postId.toString())
            .set('content-type', 'application/json')
            .send(JSON.stringify(payload))
    }

    static patch(postId, payload) {
        return chai
            .request(server)
            .patch(this.path + "/" + postId.toString())
            .set('content-type', 'application/json')
            .send(JSON.stringify(payload))
    }

    static delete(postId) {
        return chai
            .request(server)
            .delete(this.path + "/" + postId.toString());
    }

}

class ToDo {

    static path = "/todos";

    static get() {
        return chai
            .request(server)
            .get(this.path)
    }

}

class User {

    static path = "/users";

    static get() {
        return chai
            .request(server)
            .get(this.path)
    }

}

module.exports = {
    album : Album,
    comment : Comment,
    photo : Photo,
    post : Post,
    todo : ToDo,
    user : User
};
