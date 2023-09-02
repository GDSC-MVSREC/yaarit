import Arrow from "./assets/Vector.svg";

function Login() {
  return (
    <>
      <div className="mx-[10vh] my-[5vh] max-w-full">
        <div className="grid grid-cols-2 max-w-full h-[90vh] shadow-lg">
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
              <span className="text-[#15144B] text-[2.2em] font-black tracking-wider">
                Hello &#128075;
              </span>
              <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider">
                Enter your details
              </span>
              <br />
              <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
                Email
              </span>
              <input
                type="text"
                id="Email-login"
                name="Email-login"
                className="credentials-input"
              ></input>
              <br />
              <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
                Password
              </span>
              <input
                type="password"
                id="Email-login"
                name="Email-login"
                className="credentials-input"
              ></input>
              <br />
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    value="Remember me"
                  ></input>
                  <label
                    for="remember-me"
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
              <button className="text-white text-[1.5em] font-black tracking-wider credentials-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
