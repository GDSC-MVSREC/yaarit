import { useState } from "react";
import ArrowLeft from "../assets/chevron_left_FILL0_wght400_GRAD0_opsz24.svg";

export default function Resetpass({ setForgotPass }) {
  const [pass, setPass] = useState("");
  const [same, setSame] = useState(false);

  const checkSame = (event) => {
    event.preventDefault();
    if (same) {
      //axios
      //.then
      setForgotPass(false);
    }
  };

  return (
    <>
      <div>
        <button onClick={() => setForgotPass(false)}>
          <img src={ArrowLeft} alt="" width={"40px"} height={"40px"} />
        </button>
      </div>
      <br />
      <span
        className={"text-[#15144B] text-[2.2em] font-black tracking-wider "}
      >
        New Password &#128274;
      </span>
      <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider">
        Enter your New Password
      </span>
      <br />
      <br />
      <form
        onSubmit={(event) => {
          checkSame(event);
        }}
        className="grid"
      >
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          New password
        </span>

        <input
          type="text"
          id="Email-login-newpass"
          className="credentials-input"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          required
        ></input>
        <br />
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Re-enter new password
        </span>
        <input
          type="text"
          id="Email-login-newpass-check"
          className="credentials-input"
          onChange={(e) => {
            if (e.target.value === pass) setSame(true);
            else setSame(false);
          }}
          required
        ></input>
        <br />
        <br />
        <input
          type="submit"
          id="resetpass"
          value="Reset Pass"
          className="text-white text-[1.5em] font-black tracking-wider credentials-button"
        ></input>
      </form>
    </>
  );
}
