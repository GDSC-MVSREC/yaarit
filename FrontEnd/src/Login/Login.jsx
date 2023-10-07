import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginLayout from "./LoginLoayout.jsx";
import ForgotPass from "./ForgotPass.jsx";
import Quote from "../Quote.jsx";
import frame from "../assets/Frame.svg";
import { useMediaQuery } from "react-responsive";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [remember, setRemeber] = useState(false);
  const [successfulLogin, setSuccessfulLogin] = useState(0);
  const [forgotPass, setForgotPass] = useState(false);
  const [passResetMessage, setPassResetMessage] = useState(false);
  const [invalidEmailForResetMessage, setInvalidEmailForResetMessage] =
    useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1090px)",
  });

  const authenticate = async (event) => {
    event.preventDefault();
    try {
      // const response = await Axios.post("/api/login", { Email, Password });
      // const { token } = response.data;
      // if (remember) localStorage.setItem("token", token);
      setSuccessfulLogin(1);
      setTimeout(() => {
        navigate("/main", { state: { Password, Email } });
      }, 2000);
    } catch (error) {
      setSuccessfulLogin(-1);
    }
  };

  // useEffect(() => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       const expiryDate = new Date(token.split(".")[1]);
  //       if (new Date() <= expiryDate) {
  //         navigate("/main", { state: { Password, Email } });
  //       }
  //     }
  //   } catch (error) {}
  // }, []);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setRemeber(false);
  }, [forgotPass]);

  return (
    <>
      <div className={`grid ${isDesktopOrLaptop ? "grid-cols-2" : ""}`}>
        {isDesktopOrLaptop && <Quote />}
        <div
          className={`grid place-content-center h-screen min-h-[500px] relative`}
        >
          {!isDesktopOrLaptop && (
            <img src={frame} alt="" className="absolute top-0 left-0 -z-1" />
          )}
          <div className="grid mx-[30px]">
            {forgotPass ? (
              <ForgotPass setForgotPass={setForgotPass} />
            ) : (
              <LoginLayout
                Email={Email}
                setEmail={setEmail}
                Password={Password}
                setPassword={setPassword}
                remember={remember}
                setRemeber={setRemeber}
                successfulLogin={successfulLogin}
                setForgotPass={setForgotPass}
                authenticate={authenticate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
