import { useState } from "react";
import ArrowLeft from "../assets/chevron_left_FILL0_wght400_GRAD0_opsz24.svg";

export default function ForgotPass({ setForgotPass }) {
  const [emailForCode, setEmailForLink] = useState("");
  const [message, setMessage] = useState(true);

  const GetLink = (event) => {
    event.preventDefault();

    //axios

    setTimeout(() => {
      setMessage(false);
      setEmailForLink("");
    }, 1200);
  };

  return (
    <>
      <button onClick={() => setForgotPass(false)}>
        <img src={ArrowLeft} alt="" width={"40px"} height={"40px"} />
      </button>
      <br />
      <span
        className={"text-[#15144B] text-[2.2em] font-black tracking-wider "}
      >
        Forgot Password &#128273;
      </span>
      <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider">
        {message
          ? "Enter your email to get verification Link"
          : "Link has been sent to your mail!"}
      </span>
      <br />
      <br />
      <form
        onSubmit={(event) => {
          GetLink(event);
        }}
        className="grid"
      >
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Email
        </span>

        <input
          type="text"
          id="Email-login-forgot_pass"
          className="credentials-input"
          value={emailForCode}
          onChange={(e) => {
            setEmailForLink(e.target.value);
          }}
          required
        ></input>
        <br />
        <input
          type="submit"
          id="get-code"
          value="Reset Password"
          className="text-white text-[1.5em] font-black tracking-wider credentials-button"
        ></input>
      </form>
    </>
  );
}
