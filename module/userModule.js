const fs = require("fs");
const path = require("path");

const userList = path.join(__dirname, "../data", "user.json");

class userData {
  constructor(name, emailId, password) {
    this.name = name;
    this.emailId = emailId;
    this.password = password;
  }

  static fetchAll(callback) {
    fs.readFile(userList, (err, data) => {
      console.log("fist file readed");
      callback(!err && data.length ? JSON.parse(data) : []);
      console.log("file readed 2", err, data);
    })
  }

  save() {
    userData.fetchAll((users) => {
      console.log("came in save")
      let updatedUser;
      if (this.id) {
        updatedUser = users.map((user) => {
          return user.id === this.id ? this : user;
        })
      }
      else {
        this.id = Date.now().toString();
        updatedUser = [...users, this];
      }

      fs.writeFile(userList, JSON.stringify(updatedUser), (err) => {
        console.log("error in file write", err);
      });
    });
  }

  static findUser(email, callback) {
    this.fetchAll((users) => {
      const userfound = users.find((user) => user.emailId === email);
      callback(userfound);
    });
  }

  static login(email, password, callback) {
    this.fetchAll((users) => {
      const user = users.find(u => u.emailId === email && u.password === password);

    if(!user){
      return callback("User not found", null);
    }

    if(user.password !== password){
      return callback("Wrong password", null);
    }

    
    callback(null, user);
    
    });
  }

}


module.exports = userData;