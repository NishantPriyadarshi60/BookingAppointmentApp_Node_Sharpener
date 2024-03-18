const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

router.get('/', userController.renderForm);
router.get('/', userController.getAll);
router.post('/', userController.create);
router.delete('/', userController.delete);

module.exports  = router;