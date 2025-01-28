import { useEffect, useState } from "react";
import classes from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginPageProps {
  url: string;
}

export default function LoginPage({ url }: LoginPageProps) {
  const [isActive, setIsActive] = useState(false);
  const [nik, setNik] = useState("");
  const [npm, setNpm] = useState("");
  const [passMahasiswa, setPassMahasiswa] = useState("");
  const [passDosen, setpassDosen] = useState("");
  const navigate = useNavigate();

  const handleTransitionDosen = () => {
    setIsActive(true);
  };

  const handleTransitionMahasiswa = () => {
    setIsActive(false);
  };

  const handleLoginMahasiswa = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      let { data } = await axios.post(`${url}/login-mahasiswa`, {
        npm,
        password: passMahasiswa,
      });
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      //ganti
      //hapus
      console.log(error);
    }
  };

  const handleLoginDosen = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      let { data } = await axios.post(`${url}/login-dosen`, {
        nik,
        password: passDosen,
      });
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      //ganti
      //hapus
      console.log(error);
    }
  };

  useEffect(() => {
    //ganti
    //hapus
    console.log(`nik : ${nik}`);
    console.log(`npm : ${npm}`);
  }, [nik, npm]);

  return (
    <div
      className={`${classes.container} ${isActive ? classes.active : ""}`}
      id="container"
    >
      <div className={`${classes["form-container"]} ${classes["dosen"]}`}>
        <form>
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="NIK"
            onChange={(e) => {
              setNik(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassDosen(e.target.value);
            }}
          />
          <button onClick={(e) => handleLoginDosen(e)}>Sign In</button>
        </form>
      </div>
      <div className={`${classes["form-container"]} ${classes["mahasiswa"]}`}>
        <form>
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="NPM"
            onChange={(e) => {
              setNpm(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassMahasiswa(e.target.value);
            }}
          />
          <button onClick={(e) => handleLoginMahasiswa(e)}>Sign In</button>
        </form>
      </div>
      <div className={`${classes["toggle-container"]}`}>
        <div className={classes.toggle}>
          <div
            className={`${classes["toggle-panel"]} ${classes["toggle-left"]}`}
          >
            <h1>Mahasiswa?</h1>
            <p>Tekan tombol dibawah untuk masuk sebagai mahasiswa</p>
            <button
              className={classes.hidden}
              onClick={handleTransitionMahasiswa}
            >
              MAHASISWA
            </button>
          </div>
          <div
            className={`${classes["toggle-panel"]} ${classes["toggle-right"]}`}
          >
            <h1>Dosen?</h1>
            <p>Tekan tombol dibawah untuk masuk sebagai dosen</p>
            <button className={classes.hidden} onClick={handleTransitionDosen}>
              DOSEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
