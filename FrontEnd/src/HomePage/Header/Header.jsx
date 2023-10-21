import Yaarit from "../../assets/Yaarit.svg";
import CarouselPage from "./CarouselPage";

export default function Header({
  blog,
  blogScroll,
  eventScroll,
  scrollHandler,
}) {
  return (
    <>
      <div className="min-h-[60px] flex justify-between items-center py-[40px] px-[60px] absolute w-full">
        <div className="flex flex-col">
          <img src={Yaarit} alt="" className="w-full max-w-[170px] h-auto" />
        </div>
        <div>
          <button
            id="profile"
            className="font-black pt-[6px] text-[20px] tracking-wide"
          >
            Profile
          </button>
          <button
            id="signout"
            className="font-black ml-[30px] pt-[6px] text-[20px] tracking-wide"
          >
            SignOut
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#87BDFB] via-[#D0E3FC] to-[#EADFFF] pt-[130px] pb-[80px] px-[60px]">
        <CarouselPage
          blog={blog}
          blogScroll={blogScroll}
          eventScroll={eventScroll}
          scrollHandler={scrollHandler}
        />
      </div>
    </>
  );
}
