import Calender from "../../../assets/Calender.svg";
export default function EventPanel({ Event, isDesktopOrLaptop, isTablet }) {
  return (
    <div
      className={` flex flex-col rounded-xl border-[2px] border-[#dfe4fff] backdrop-blur px-[25px]  h-auto ${
        isTablet
          ? isDesktopOrLaptop
            ? "mt-[50px] max-w-[400px] pt-[25px] pb-[30px]"
            : "mt-[40px] max-w-[380px] pt-[20px] pb-[25px]"
          : "mt-[25px] max-w-[340px] pt-[18px] pb-[23px]"
      }`}
    >
      <img src={`data:image/png;base64,` + Event.Image.data} alt="" />
      <span
        id="event-heading"
        className={`text-[#606CFA] drop-shadow-xl mt-[15px] ${
          isTablet
            ? isDesktopOrLaptop
              ? "text-[25px]"
              : "text-[23px]"
            : "text-[18px]"
        } leading-[40px] tracking-wider font-[600] mb-[10px]`}
      >
        {Event.Heading}
      </span>
      <div className="flex mt-[10px] items-center">
        <img src={Calender} alt="" style={{ width: "30px", height: "30px" }} />
        <span
          className={`font-[500] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[20px]"
                : "text-[20px]"
              : "text-[18px]"
          } tracking-wider leading-[40px] ml-[15px] text-[#5F6A77]`}
        >
          {Event.Date}
        </span>
      </div>
      <div
        className={`flex flex-wrap justify-between items-center mt-[15px] ${
          isTablet
            ? isDesktopOrLaptop
              ? "text-[20px]"
              : "text-[20px]"
            : "text-[18px]"
        }`}
      >
        <button className="text-white font-bold tracking-wider credentials-button px-[40px] ">
          Register
        </button>
        <button
          id="view-details"
          className="font-bold transition-all hover:drop-shadow-xl  ml-[10px] min-w-[100px]"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
