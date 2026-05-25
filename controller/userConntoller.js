const userModule = require("../module/userModule");

exports.contact_us = (req, res) => {
  res.render("contact-us");
}

exports.sign_in = (req, res, next) => {
  const userAdded = new userModule(
    req.body.name,
    req.body.emailId,
    req.body.password
  )
  userAdded.save();
  req.session.isLoggedIn = true;
  req.session.user = userAdded;
  req.session.save(() => {
    res.redirect("/home");
  })

};

exports.loginGet = (req, res) => {
  res.render("login");
}

exports.sign_inGet = (req, res) => {
  res.render("sign-in");
}


exports.login = (req, res, next) => {
  const { emailId, password } = req.body;

  userModule.login(emailId, password, (err, user) => {
    if (user) {
      req.session.isLoggedIn = true;
      req.session.user = user;
      console.log("login completed");
      req.session.save(() => {
        return res.redirect("/home");
      });


    }
    else {
      console.log("login unsussesful", { err: err });
      return res.render("login", { err });
    };
  })
}

exports.logout = (req, res) => {

  req.session.destroy(() => {

    res.redirect("/home");

  });

}