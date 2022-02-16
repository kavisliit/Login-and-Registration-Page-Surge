const router = require('express').Router();
// let User = require('../models/User');
const authController = require("../controllers/user");
const isAuth = require("../middleware/auth");
// import {isAuth} from "../middleware/auth"

//add
// router.route('/add').post((req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const userName = req.body.userName;
//   const password = req.body.password;

//   const newUser = new User({
//     name,
//     email,
//     userName,
//     password,
//   });

//   newUser
//     .save()
//     .then(() => {
//       res.json('User Added');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//get
// router.route('/').get((req, res) => {
//   User.find()
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//Login

router.post("/login", authController.login);

router.put("/update/:userId",isAuth, authController.update);

// router.post("/login",async (req,res)=>{
//   const {userName,password} = req.body;
  
//user signup
router.post(
  "/signup",
  // [
  //   body("email")
  //     .isEmail()
  //     .withMessage("Please enter a valid email.")
  //     .custom((value, { req }) => {
  //       return User.findOne({ email: value }).then((userDoc) => {
  //         if (userDoc) {
  //           return Promise.reject("E-Mail address already exists!");
  //         }
  //       });
  //     })
  //     .normalizeEmail(),
  //   body("password").trim().isLength({ min: 5 }),
  //   body("name").trim().not().isEmpty(),
  // ],
  authController.signup,
);
  
  
//   try {
//   const user = await User.findOne({userName,password})
//   if(user){
//   res.send(user)
//   }
//   else{
//   return res.status(400).json(error);
//   }
//   } catch (error) {
//   return res.status(400).json(error);
//   }
//   })


// get one user for update
router.get("/getuser/:userId", isAuth, authController.getUser);

// router.route('/get/:id').get(async (req, res) => {
//   let userId = req.params.id;
//   const user = await User.findById(userId)
//     .then((us) => {
//       res.send(us)
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res
//         .status(500)
//         .send({ status: 'Error with Getting data', error: message });
//     });
// });

//update
// router.route('/update/:id').put(async (req, res) => {
//   let userID = req.params.id;
//   const { name, email, userName, password } = req.body;

//   const updateUser = {
//     name,
//     email,
//     userName,
//     password,
//   };

//   const update = await User.findByIdAndUpdate(userID, updateUser)
//     .then(() => {
//       res.status(200).send({ status: 'User Updated'});
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ status: 'Error with updating data', error: message });
//     });
// });

module.exports = router;
