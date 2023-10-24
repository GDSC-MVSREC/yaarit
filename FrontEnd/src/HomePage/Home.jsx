import Header from "./Header/Header";
import Body from "./Body/Body";
import Axios from "axios";
import { useRef, useState, useEffect } from "react";
import Image from "../assets/Blog.png";

export default function Home() {
  const [renderNow, setRenderNow] = useState();
  const [blogs, setBlogs] = useState([]);
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    Axios.post("http://192.168.0.104:8000/blogs/blogsList", {
      AUTH_API_KEY: "AIyuhjerty9poiud9qwer4poijkhpoiubqXpkjm",
    }).then((response) => {
      setBlogs(response.data.data);
      Axios.post("http://192.168.0.104:8000/events/eventsList", {
        AUTH_API_KEY: "AIyuhjerty9poiud9qwer4poijkhpoiubqXpkjm",
      }).then((response) => {
        setEvents(response.data.data);
        setRenderNow(true);
      });
    });
  }, []);

  const blogScroll = useRef(null);
  const eventScroll = useRef(null);
  function scrollHandler(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <>
        <Header
          blog={blogs[0]}
          Event={Events[0]}
          blogScroll={blogScroll}
          eventScroll={eventScroll}
          scrollHandler={scrollHandler}
          renderNow={renderNow}
        />
        <Body
          blogs={blogs}
          Events={Events}
          blogScroll={blogScroll}
          eventScroll={eventScroll}
          renderNow={renderNow}
        />
      </>
    </>
  );
}
