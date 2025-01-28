const { compare } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { Mahasiswa, Dosen } = require("../models");

const loginMahasiswa = async (req, res, next) => {
  try {
    const { npm, password } = req.body;
    if (!npm || !password) {
      //ganti
      console.log(`ah fucked ${npm} ${password}`);

      throw { name: "InvalidLogin" };
    }

    const mahasiswa = await Mahasiswa.findOne({
      where: {
        npm,
      },
    });

    if (!mahasiswa) {
      throw { name: "LoginError" };
    }

    if (!compare(password, mahasiswa.password)) {
      throw { name: "LoginError" };
    }
    //hapus
    console.log(mahasiswa);

    const payload = {
      id: mahasiswa.id,
      npm: mahasiswa.npm,
    };

    const access_token = signToken(payload);

    res.status(200).json({
      access_token,
    });
  } catch (error) {
    //hapus
    console.log(error);
    next(error);
  }
};

const loginDosen = async (req, res, next) => {
  try {
    const { nik, password } = req.body;
    if (!nik || !password) {
      //ganti
      throw { name: "InvalidLogin" };
    }

    const dosen = await Dosen.findOne({
      where: {
        nik,
      },
    });

    if (!dosen) {
      throw { name: "LoginError" };
    }

    if (!compare(password, dosen.password)) {
      throw { name: "LoginError" };
    }

    const payload = {
      id: dosen.id,
      nik: dosen.nik,
    };

    const access_token = signToken(payload);

    res.status(200).json({
      access_token,
    });
  } catch (error) {
    //hapus
    console.log(error);
    next(error);
  }
};

module.exports = { loginMahasiswa, loginDosen };
