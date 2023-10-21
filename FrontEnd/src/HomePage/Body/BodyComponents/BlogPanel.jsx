import { useEffect } from "react";
import Calender from "../../../assets/Calender.svg";
import { useNavigate } from "react-router-dom";

export default function BlogPanel({ object }) {
  const navigate = useNavigate();
  const { Image, Domain, Heading, Summary, Date } = object;

  function HandleClick() {
    navigate("/Home/Blog/" + Domain, { state: { object } });
  }

  return (
    <div className=" flex flex-col rounded-xl border-[2px] border-[#dfe4fff] backdrop-blur px-[25px] pt-[25px] pb-[30px] max-w-[400px] h-auto mt-[50px]">
      <img src={Calender} alt="" className="w-full max-w-[350px] h-auto" />
      <br />
      <span
        id="blog-heading"
        className=" text-[#606CFA] drop-shadow-xl text-[25px] leading-[40px] tracking-wider font-[600]"
      >
        {Domain}
      </span>
      <span className="inline-block wrapping max-w-[96ch] text-black text-[30px] leading-[40px] tracking-wider font-[600] ">
        {Heading}
      </span>
      <br />
      <div>
        <span className="wrapping font-[500] text-[20px] max-w-[96ch]">
          {Summary}
        </span>
        <br />
        <button
          id="view-details"
          className="font-black transition-all hover:drop-shadow-xl text-[25px] "
          onClick={() => {
            HandleClick();
          }}
        >
          Read More
        </button>
      </div>
      <div className="flex mt-[20px] items-center">
        <img src={Calender} alt="" style={{ width: "30px", height: "30px" }} />
        <span className="font-[500] text-[20px] tracking-wider leading-[40px] ml-[15px] text-[#5F6A77]">
          {Date}
        </span>
      </div>
    </div>
  );
}
