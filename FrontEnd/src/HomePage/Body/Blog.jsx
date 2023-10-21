import BackIcon from "../../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
import profile from "../../assets/Ellipse.svg";
import Photo from "../../assets/Blog.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Blog() {
  const navigate = useNavigate();
  let location = useLocation();
  const content = location.state.object;
  const blog = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    blog.current?.scrollIntoView();
  }, []);

  return (
    <div className="py-[40px] px-[100px]" ref={blog}>
      <div className="flex justify-start ">
        <img
          src={BackIcon}
          alt=""
          className="w-full max-w-[40px] h-auto cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />
        <span
          className="text-[30px] font-black ml-[20px] cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </span>
      </div>
      <div className="rounded-xl shadow-md border-gray-200 border-[1px] mx-[20px] my-[30px] py-[50px] px-[150px]">
        <div className="flex justify-center items-center">
          <span className="text-[45px] tracking-wide font-bold text-[#606CFA]">
            {content.Domain}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[40px] tracking-wider mt-[20px] font-[600] text-center">
            {content.Heading}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[30px] tracking-wider mt-[20px] font-[600] text-[#5F6A77] ">
            {content.Summary}
          </span>
        </div>
        <div className="flex justify-between items-center mt-[60px]">
          <div className="flex justify-between items-center">
            <img src={profile} alt="" />
            <div className="flex flex-col ml-[30px]">
              <span className="text-[20px] tracking-wider font-bold ">
                {content.FirstName} {content.LastName}
              </span>
              <span className="text-[20px] tracking-wider font-[500] ">
                {content.Year}, {content.Dept}.
              </span>
            </div>
          </div>
          <div className="flex flex-col text-end">
            <span className="text-[20px] tracking-wider font-bold ">
              Published On
            </span>
            <span className="text-[20px] tracking-wider font-[500] ">
              {content.Date}
            </span>
          </div>
        </div>
        <div className="flex justify-center my-[100px]">
          <img
            src={Photo}
            alt=""
            className="w-full max-w-[700px] min-w-[300px] h-auto"
          />
        </div>
        <div className=" flex flex-col text-[35px]">
          {content.Text.map((obj, index) => {
            return (
              <span className="mb-[50px]" key={index}>
                {obj}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
