const { verifyToken } = require("../helpers/jwt");
const { Mahasiswa } = require("../models/mahasiswa");

async function authentication(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw { name: "Unauthorized" };

    const access_token = authorization.split(" ")[1];
    const payload = verifyToken(access_token);
    const mahasiswa = await Mahasiswa.findByPk(payload.id);

    if (!mahasiswa) throw { name: "Unauthorized" };

    req.logInfo = {
      mahasiswaId: mahasiswa.id,
      npm: mahasiswa.npm,
    };

    next();
  } catch (error) {
    //hapus
    console.log(error);
    next(error);
  }
}

module.exports = authentication;
