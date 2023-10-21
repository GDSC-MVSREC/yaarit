import Calender from "../../../assets/Calender.svg";
export default function EventPanel({ Image, Heading, Date }) {
  return (
    <div className="flex flex-col rounded-xl border-[2px] border-[#dfe4fff]  backdrop-blur px-[25px] pt-[25px] pb-[30px] max-w-[400px] mt-[50px]">
      <img src={Calender} alt="" className="w-full max-w-[350px] h-auto" />
      <br />
      <span
        id="blog-heading"
        className=" text-[#606CFA] drop-shadow-xl text-[23px] leading-[40px] tracking-wider font-[600]"
      >
        {Heading}
      </span>
      <br />
      <div className="flex mt-[10px] items-center">
        <img src={Calender} alt="" style={{ width: "30px", height: "30px" }} />
        <span className="inline-block text-[#5F6A77] text-[25px] leading-[40px] tracking-wider font-[600] ml-[20px] max-w-[500px]">
          {Date}
        </span>
      </div>
      <br />
      <div className="flex flex-wrap justify-between items-center">
        <button className="text-white text-[1.3em] font-black tracking-wider credentials-button px-[30px] ">
          Register
        </button>
        <button
          id="view-details"
          className="font-black transition-all hover:drop-shadow-xl text-[1.2em] ml-[10px] min-w-[100px]"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
