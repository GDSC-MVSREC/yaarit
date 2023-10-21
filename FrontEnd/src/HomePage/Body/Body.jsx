import { useEffect } from "react";
import BlogList from "./BodyComponents/BlogList";
import EventsList from "./BodyComponents/EventsList";

export default function Body({ blogs, blogScroll, eventScroll }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className=" py-[50px] px-[80px]">
      <EventsList eventScroll={eventScroll} />
      <BlogList blogs={blogs} blogScroll={blogScroll} />
    </div>
  );
}
