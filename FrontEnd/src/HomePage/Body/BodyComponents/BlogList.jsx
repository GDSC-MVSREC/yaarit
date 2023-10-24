import BlogPanel from "./BlogPanel";

export default function BlogList({
  blogs,
  blogScroll,
  isDesktopOrLaptop,
  isTablet,
  renderNow,
}) {
  return (
    <div className="mt-[70px]" ref={blogScroll}>
      <div
        className={`mt-[50px] flex flex-wrap items-center ${
          isTablet
            ? isDesktopOrLaptop
              ? "justify-between"
              : "justify-around"
            : "justify-evenly"
        }`}
      >
        <span
          className={`font-[700] ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[60px]"
                : "text-[55px]"
              : "text-[45px]"
          } tracking-wider leading-[118.5px] text-[#15144B] mr-[40px]`}
        >
          Blogs
        </span>
        <button
          className={`text-white ${
            isTablet
              ? isDesktopOrLaptop
                ? "text-[20px] px-[50px]"
                : "text-[20px] px-[40px]"
              : "text-[18px] px-[23px]"
          }  font-black tracking-wider credentials-button `}
        >
          More
        </button>
      </div>
      <div className="flex flex-wrap justify-around items-center ">
        {blogs.map((obj, index) => {
          if (index < (isTablet ? (isDesktopOrLaptop ? 4 : 3) : 2))
            return (
              <div key={obj + index}>
                {renderNow && (
                  <BlogPanel
                    object={blogs[index]}
                    isDesktopOrLaptop={isDesktopOrLaptop}
                    isTablet={isTablet}
                  />
                )}
              </div>
            );
        })}
      </div>
    </div>
  );
}
