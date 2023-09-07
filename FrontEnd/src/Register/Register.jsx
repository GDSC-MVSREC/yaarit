import { useMediaQuery } from "react-responsive";
import Quote from "../Quote.jsx";
import RegisterLayout from "./RegisterLayout.jsx";
import frame from "../assets/Frame.svg";
import { useEffect, useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [rEmail, setREmail] = useState("");
  const [phNo, setPhoneNo] = useState(0);
  const [rPass, setRPass] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [plan, setPlan] = useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1090px)",
  });

  useEffect(() => {
    console.log(
      fullName +
        "," +
        rEmail +
        "," +
        phNo +
        "," +
        rPass +
        "," +
        year +
        "," +
        branch +
        "," +
        plan
    );
  }, [fullName, rEmail, phNo, rPass, year, branch, plan]);

  return (
    <>
      <div className={`grid ${isDesktopOrLaptop ? "grid-cols-2" : ""}`}>
        {isDesktopOrLaptop && <Quote />}
        <div className={`grid place-content-center h-screen relative `}>
          <img src={frame} alt="" className="absolute top-0 left-0" />
          <div className="grid mx-[30px] pt-[100px] overflow-y-scroll no-scrollbar">
            <RegisterLayout
              fullName={fullName}
              setFullName={setFullName}
              rEmail={rEmail}
              setREmail={setREmail}
              phNo={phNo}
              setPhoneNo={setPhoneNo}
              rPass={rPass}
              setRPass={setRPass}
              year={year}
              setYear={setYear}
              branch={branch}
              setBranch={setBranch}
              plan={plan}
              setPlan={setPlan}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
