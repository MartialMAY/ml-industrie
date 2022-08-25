let User = require("./model");
let mailer = require("../config/mailer");

// Middleware qui gère l'enregistrement d'un nouvel utilisateur dans la base de données
// Et lui envoie un mail de bienvenue

//  USER SIGNUP  //

exports.registerNewUser = async (req, res) => {
  try {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    let addedUser = await user.save();
    if (addedUser) {
      mailer.welcomeMail(req.body.email, req.body.name);
    }

    res.status(201).json({
      msg: "Bienvenue chez Mlindustrie !",
      data: addedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
