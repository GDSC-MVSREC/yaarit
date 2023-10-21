import Blog from "../../assets/Blog.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LeftIcon from "../../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg";
import RightIcon from "../../assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg";
import Calender from "../../assets/Calender.svg";
import { useNavigate } from "react-router";

export default function CarouselPage({
  blog,
  blogScroll,
  eventScroll,
  scrollHandler,
}) {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/Home/Blog/" + blog.Domain, { state: { object: blog } });
  }

  const blogpage = (
    <div className="text-left flex flex-wrap justify-evenly items-center ">
      <div className="grid">
        <span className="font-[700] text-[80px] tracking-wider leading-[118.5px] text-[#15144B]">
          Expanding our <br />
          knowledge & yours, <br />
          One Blog at a time.
        </span>
        <br />
        <span className="font-[600] text-[25px] tracking-wider leading-[40px] text-[#5F6A77]">
          All the latest blogs from our creative community.
        </span>
        <br />
        <div>
          <button
            className="text-white text-[1.5em] font-black tracking-wider credentials-button px-[60px]"
            onClick={() => {
              scrollHandler(blogScroll);
            }}
          >
            More Blogs
          </button>
        </div>
      </div>

      <div className="grid rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ffff] bg-[#e8eaf7] backdrop-blur px-[30px] py-[30px] ">
        <img
          src={Blog}
          alt=""
          className=" w-full max-w-[400px] min-w-[330px] h-auto rounded-2xl"
        />
        <br />
        <span
          id="blog-heading"
          className=" text-[#606CFA] text-[25px] leading-[40px] tracking-wider font-[600]"
        >
          {blog.Domain}
        </span>

        <div className="max-w-[400px]">
          <span className="flex text-black text-[25px] leading-[40px] tracking-wider font-[600] max-w-[96ch] wrapping">
            {blog.Heading}
          </span>
        </div>
        <br />
        <div>
          <button
            className="text-white text-[25px] font-black tracking-wider credentials-button px-[50px]"
            onClick={() => {
              HandleClick();
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );

  const registerpage = (
    <div className="text-left flex flex-wrap justify-evenly items-center">
      <div>
        <div className="grid rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ffff] bg-[#e8eaf7] backdrop-blur px-[30px] py-[30px] ">
          <img
            src={Blog}
            alt=""
            className=" w-full max-w-[400px] min-w-[330px] h-auto rounded-2xl"
          />
          <br />
          <span
            id="blog-heading"
            className=" text-[#606CFA] text-[25px] leading-[40px] tracking-wider font-[600]"
          >
            Google Cloud Study Jams - 2
          </span>
          <div className="flex mt-[10px] items-center">
            <img
              src={Calender}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
            <br />
            <span className="inline-block text-[#5F6A77] text-[25px] leading-[40px] tracking-wider font-[600] ml-[20px] max-w-[500px]">
              Oct 7, 2023
            </span>
          </div>
          <br />
          <div>
            <button className="text-white text-[1.3em] font-black tracking-wider credentials-button px-[50px]">
              Register
            </button>
            <button
              id="view-details"
              className="font-black text-[1.2em] ml-[20px]"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="text-right grid">
        <span className="font-[700] text-[80px] tracking-wider leading-[118.5px] text-[#15144B]">
          Creating the Best. <br /> Day. Ever.
        </span>
        <br />
        <span className="font-[600] text-[25px] tracking-wider leading-[40px] text-[#5F6A77]">
          Life is an event. Make it memorable.
        </span>
        <br />
        <div>
          <button
            className="text-white text-[1.5em] font-black tracking-wider credentials-button px-[60px]"
            onClick={() => {
              scrollHandler(eventScroll);
            }}
          >
            More Events
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ffff] bg-[#dfe4ff4d] backdrop-blur px-[20px] py-[70px] ">
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
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
