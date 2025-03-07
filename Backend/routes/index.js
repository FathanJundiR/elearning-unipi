const express = require("express");
const router = express.Router();
const { loginMahasiswa, loginDosen } = require("../controllers/authController");
const errorHandler = require("../middleware/errorHandler");

router.post("/login-mahasiswa", loginMahasiswa);
router.post("/login-dosen", loginDosen);

router.use(errorHandler);

module.exports = router;
