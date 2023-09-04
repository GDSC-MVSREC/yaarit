import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Arrow from "../assets/Vector.svg";
import LoginLayout from "./LoginLoayout.jsx";
import ForgotPass from "./ForgotPass.jsx";
import frame from "../assets/Frame.svg";

import { useMediaQuery } from "react-responsive";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [remember, setRemeber] = useState(false);
  const [successfulLogin, setSuccessfulLogin] = useState(0);
  const [forgotPass, setForgotPass] = useState(false);
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
      <div
        className={`grid h-screen w-screen ${
          isDesktopOrLaptop ? "grid-cols-2" : ""
        }`}
      >
        {isDesktopOrLaptop && (
          <div className="credentials-bg grid place-content-center">
            <div className="px-[30px] py-[60px] rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ff] bg-[#dfe4ff4d] backdrop-blur pl-[60px] pr-[80px] floats-vertical">
              <div className="flex">
                <img
                  src={Arrow}
                  alt=""
                  width={"25px"}
                  height={"45px"}
                  className="mr-[20px]"
                />
                <span className="text-[4.2em] leading-[1.1em] font-black text-white tracking-wider">
                  Your{" "}
                </span>
              </div>

              <p className="text-[4.2em] leading-[1.1em] font-black text-white tracking-wider">
                Destination
              </p>
              <p className="text-[4.2em] leading-[1.1em] font-black text-[#15144B] tracking-wider">
                Awaits.
              </p>
              <br />
              <br />
              <span className="font-black text-white tracking-wider">
                Unlock your educational journey
              </span>
            </div>
          </div>
        )}
        <div className="grid place-content-center relative">
          <img src={frame} alt="" className="absolute top-0 left-0" />
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
