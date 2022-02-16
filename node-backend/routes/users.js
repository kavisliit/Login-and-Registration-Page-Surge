const router = require('express').Router();
const authController = require("../controllers/user");
const isAuth = require("../middleware/auth");


router.post("/login", authController.login);

router.put("/update/:userId",isAuth, authController.update);


router.post("/signup",authController.signup,);
  
// get one user for update
router.get("/getuser/:userId", isAuth, authController.getUser);

module.exports = router;
