import { useEffect, useState } from "react";
import Arrow from "./assets/Vector.svg";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [successfulLogin, setSuccessfulLogin] = useState(0);

  const authenticate = (event) => {
    event.preventDefault();
    console.log("To authenticate!");
    console.log(Email + ":" + Password);
  };

  return (
    <>
      <div className="grid grid-cols-2 max-w-full h-screen shadow-lg">
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
        <div className="grid place-content-center">
          <div className="grid">
            <span
              className={
                "text-[#15144B] text-[2.2em] font-black tracking-wider "
              }
            >
              {successfulLogin === 0 ? (
                <>Hello &#128075;</>
              ) : successfulLogin === -1 ? (
                <>Hey! &#129300;</>
              ) : (
                successfulLogin === 1 && <>Welcome back! &#129303;</>
              )}
            </span>
            <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider">
              {successfulLogin === 0 ? (
                <>Enter your details</>
              ) : successfulLogin === -1 ? (
                <>Looks like your credentials are wrong. Try again!</>
              ) : (
                successfulLogin === 1 && <>Logging you in!</>
              )}
            </span>
            <br />
            <form className="grid" onSubmit={(e) => authenticate(e)}>
              <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
                Email
              </span>
              <input
                type="text"
                id="Email-login"
                className="credentials-input"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              ></input>
              <br />
              <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
                Password
              </span>
              <input
                type="password"
                id="Password-login"
                className="credentials-input"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              ></input>
              <br />
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    id="remember-me"
                    value="Remember me"
                  ></input>
                  <label
                    htmlFor="remember-me"
                    className=" pl-[10px] text-[#15144B] font-black tracking-wider "
                  >
                    Remember me
                  </label>
                </div>
                <button className="font-[600]" id="forgot-password">
                  Forgot password?
                </button>
              </div>
              <br />
              <input
                type="submit"
                id="login"
                value="Login"
                className="text-white text-[1.5em] font-black tracking-wider credentials-button"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
