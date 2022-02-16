
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

//add
exports.signup = async (req, res, next) => {

  const email = req.body.email;
  const userName = req.body.userName;
  const name = req.body.name;
  const password = req.body.password;
  try {
    const checkuser = await User.findOne({ email: email });
    if(checkuser){
      const error = new Error("Email exsisted");
      error.statusCode = 500;
      throw error;
    }
    const hashedPw = await bcrypt.hash(password, 12);
    const user = new User({
      email: email,
      password: hashedPw,
      userName: userName,
      name:name
    });
    const result = await user.save();
    res.status(201).json({ message: "User created!", userId: result._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//update
exports.update = async (req, res, next) => {

  let userID = req.params.userId;
  const { name, email, userName, password } = req.body;
  const hashedPw = await bcrypt.hash(password, 12);

  const updateUser = {
    name,
    email,
    userName,
    password:hashedPw,
  };

  const update = await User.findByIdAndUpdate(userID, updateUser)
    .then(() => {
      res.status(200).send({ status: 'User Updated'});
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: 'Error with updating data', error: message });
    });
};


//get one user 
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("Could not find user.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "user fetched.", user: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//login check validatons
exports.login = async (req, res, next) => {
    //const email = req.body.email;
    let filter
    if(req.body.email){
      filter={email:req.body.email}
    }
    else{
      filter={userName:req.body.userName}
    }
    

    const password = req.body.password;
    try {
      const user = await User.findOne(filter);
      if (!user) {
        const error = new Error("A user with this email could not be found.");
        error.statusCode = 401;
        throw error;
      }
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        const error = new Error("Wrong password!");
        error.statusCode = 401;
        throw error;
      }
  
      const token = jwt.sign(
        {
          email: user.email,
          name: user.name,
          userId: user._id.toString(),
        },
        "somesupersecretsecret",
        { expiresIn: "1h" },
      );
      res.status(200).json({ token: token, userId: user._id.toString() });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };