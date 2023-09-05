import { useMediaQuery } from "react-responsive";
import Quote from "./Quote.jsx";
import frame from "./assets/Frame.svg";

function Register() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1090px)",
  });

  return (
    <>
      <div className={`grid ${isDesktopOrLaptop ? "grid-cols-2" : ""}`}>
        {isDesktopOrLaptop && <Quote />}
        <div
          className={`grid place-content-center h-screen min-h-[500px] relative`}
        >
          <img src={frame} alt="" className="absolute top-0 left-0" />
          <div className="grid mx-[30px]"></div>
        </div>
      </div>
    </>
  );
}

export default Register;
