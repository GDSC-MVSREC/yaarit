import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LeftIcon from "../../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg";
import RightIcon from "../../assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg";
import Calender from "../../assets/Calender.svg";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function CarouselPage({
  blog,
  Event,
  blogScroll,
  eventScroll,
  scrollHandler,
  renderNow,
}) {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/Home/Blog/" + blog.Domain, { state: { object: blog } });
  }

  const isDesktopOrLaptopChange = useMediaQuery({
    query: "(min-width: 1090px)",
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1550px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const blogpage = (
    <div className="flex justify-evenly items-center">
      <div className="flex flex-col justify-center items-center">
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[80px]"
                : "text-[60px]"
              : "text-[40px]"
          } tracking-wider text-[#15144B]`}
        >
          Expanding
        </span>
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[80px]"
                : "text-[60px]"
              : "text-[40px]"
          } tracking-wider text-[#15144B]`}
        >
          knowledge
        </span>
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[80px]"
                : "text-[60px]"
              : "text-[40px]"
          } tracking-wider text-[#15144B]`}
        >
          One Blog at a time.
        </span>
        <span
          className={`font-[600] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[25px] mt-[30px]"
                : "text-[18px] mt-[20px]"
              : "text-[15px] mt-[15px]"
          } tracking-wider text-[#5F6A77]`}
        >
          All the latest blogs from our creative community.
        </span>
        <div>
          <button
            className={`text-white font-black tracking-wider credentials-button  ${
              isTablet
                ? isDesktopOrLaptop
                  ? "text-[25px] px-[60px] mt-[30px]"
                  : " text-[18px] px-[40px] mt-[20px]"
                : " text-[15px] px-[30px] mt-[15px]"
            }`}
            onClick={() => {
              scrollHandler(blogScroll);
            }}
          >
            {isDesktopOrLaptopChange ? "More Blogs" : "Blogs"}
          </button>
        </div>
      </div>
      {isDesktopOrLaptopChange && renderNow && (
        <div
          className={` text-left grid rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ffff] bg-[#e8eaf7] backdrop-blur px-[30px] py-[30px] ${
            isTablet
              ? isDesktopOrLaptop
                ? " max-w-[400px]"
                : "max-w-[350px]"
              : "max-w-[200px]"
          }`}
        >
          <img
            src={`data:image/png;base64,` + blog.Photo.data}
            alt=""
            className=" w-full h-auto rounded-2xl"
          />
          <span
            id="blog-heading"
            className={`text-[#606CFA] ${
              isTablet
                ? isDesktopOrLaptop
                  ? "text-[25px]"
                  : "text-[23px]"
                : "text-[20px]"
            } tracking-wider font-[600] mt-[15px]`}
          >
            {blog.Domain}
          </span>

          <div
            className={` mt-[15px] ${
              isTablet
                ? isDesktopOrLaptop
                  ? " max-w-[400px]"
                  : "max-w-[350px]"
                : "max-w-[200px]"
            }`}
          >
            <span
              className={`flex text-black ${
                isTablet
                  ? isDesktopOrLaptop
                    ? "text-[25px]"
                    : "text-[20px]"
                  : "text-[18px]"
              } tracking-wider font-[600] max-w-[96ch] wrapping`}
            >
              {blog.Heading}
            </span>
          </div>

          <div className="mt-[15px]">
            <button
              className={`text-white  font-black tracking-wider credentials-button ${
                isTablet
                  ? isDesktopOrLaptop
                    ? "px-[50px] text-[25px]"
                    : "px-[30px] text-[20px]"
                  : "px-[50px] text-[25px]"
              }`}
              onClick={() => {
                HandleClick();
              }}
            >
              Read More
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const registerpage = (
    <div className="text-left flex flex-wrap justify-evenly items-center">
      {isDesktopOrLaptopChange && renderNow && (
        <div
          className={`grid rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ffff] bg-[#e8eaf7] backdrop-blur px-[30px] py-[30px] ${
            isTablet
              ? isDesktopOrLaptop
                ? " max-w-[400px]"
                : "max-w-[350px]"
              : "max-w-[200px]"
          }`}
        >
          <img
            src={`data:image/png;base64,` + Event.Image.data}
            alt=""
            className=" w-full h-auto rounded-2xl"
          />
          <span
            id="event-heading"
            className={`text-[#606CFA] ${
              isTablet
                ? isDesktopOrLaptop
                  ? "text-[25px] mt-[20px]"
                  : "text-[23px] mt-[15px]"
                : "text-[20px] mt-[10px]"
            } tracking-wider font-[600]`}
          >
            {Event.Heading}
          </span>
          <div className="flex mt-[10px] items-center mt-[15px]">
            <img
              src={Calender}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
            <span
              className={`font-[600] ${
                isTablet
                  ? isDesktopOrLaptop
                    ? "text-[20px]"
                    : "text-[20px]"
                  : "text-[18px]"
              } tracking-wider ml-[15px] text-[#5F6A77]`}
            >
              {Event.Date}
            </span>
          </div>
          <div className="mt-[15px]">
            <button
              className={`text-white  font-black tracking-wider credentials-button ${
                isTablet
                  ? isDesktopOrLaptop
                    ? "px-[50px] text-[20px]"
                    : "px-[30px] text-[18px]"
                  : "px-[25px] text-[15px]"
              }`}
            >
              Register
            </button>
            <button
              id="view-details"
              className={`font-black ml-[20px] ${
                isTablet
                  ? isDesktopOrLaptop
                    ? "text-[20px]"
                    : "text-[18px]"
                  : "text-[15px]"
              }`}
            >
              View Details
            </button>
          </div>
        </div>
      )}
      <div className="text-right flex flex-col items-center justify-center">
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[80px]"
                : "text-[60px]"
              : "text-[40px]"
          } tracking-wider text-[#15144B]`}
        >
          Creating the
        </span>
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[80px]"
                : "text-[60px]"
              : "text-[40px]"
          } tracking-wider text-[#15144B]`}
        >
          Best.
        </span>
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[80px]"
                : "text-[60px]"
              : "text-[40px]"
          } tracking-wider text-[#15144B]`}
        >
          Day. Ever.
        </span>
        <span
          className={`font-[600] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[25px] mt-[30px]"
                : "text-[20px] mt-[20px]"
              : "text-[15px] mt-[15px]"
          } tracking-wider text-[#5F6A77]`}
        >
          Life is an event. Make it memorable.
        </span>
        <div>
          <button
            className={`text-white  font-black tracking-wider credentials-button  ${
              isTablet
                ? isDesktopOrLaptop
                  ? "text-[25px] px-[60px] mt-[30px]"
                  : " text-[20px] px-[40px] mt-[20px]"
                : " text-[15px] px-[30px] mt-[15px]"
            }`}
            onClick={() => {
              scrollHandler(eventScroll);
            }}
          >
            {isDesktopOrLaptopChange ? "More Events" : "Events"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ffff] bg-[#dfe4ff4d] backdrop-blur px-[20px] py-[100px] ${
        isTablet ? "py-[70px]" : "py-[100px] h-[70vh]"
      } `}
    >
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showIndicators={isTablet}
        showArrows={isTablet}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <img src={LeftIcon} alt="" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <img src={RightIcon} alt="" />
            </div>
          );
        }}
      >
        {blogpage}
        {registerpage}
      </Carousel>
    </div>
  );
}
