import BlogPanel from "./BlogPanel";

export default function BlogList({ blogs, blogScroll }) {
  return (
    <div className="mt-[70px]" ref={blogScroll}>
      <div className=" px-[20px] mt-[50px] flex flex-wrap items-center justify-between">
        <span className="font-[700] text-[60px] tracking-wider leading-[118.5px] text-[#15144B] mr-[40px]">
          Blogs
        </span>
        <button className="text-white text-[20px] font-black tracking-wider credentials-button px-[50px] ">
          Load More
        </button>
      </div>
      <div className="flex flex-wrap justify-around items-center ">
        {blogs.map((obj, index) => {
          return (
            <div key={obj + index}>
              <BlogPanel object={blogs[index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
