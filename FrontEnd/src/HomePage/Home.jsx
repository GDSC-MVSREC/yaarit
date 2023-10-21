import Header from "./Header/Header";
import Body from "./Body/Body";
import { useRef } from "react";

export default function Home() {
  const blogs = [
    {
      FirstName: "Tarun",
      LastName: "Jakkula",
      Year: "Fourth Year",
      Dept: "CSE",
      Image: "Hi",
      Domain: "Digital Marketing ",
      Heading: "Best Digital Marketing Strategies You should be Using",
      Summary:
        "It has survived only five centuries, but also the leap into electronic typesetting, remaining",
      Date: "15-11-2022",
      Text: [
        "It all started a couple of weeks ago when I was going through my feed on X. It feels weird to call “Twitter” by a different name now. It’s like that kid in high school whom you’ve known by one name for a long time suddenly changes their name, just feels odd.",
        "I thought long and hard about it and proceeded to read the rest ofthe thread. Artiom made some very logical points highlighting the need for designers to grow by focusing on things that bring business value beyond pixels. He also had some pointers on how to do this:",
      ],
    },
    {
      FirstName: "Tarun",
      LastName: "Jakkula",
      Year: "Fourth Year",
      Dept: "CSE",
      Image: "Hi",
      Domain: "Digital Marketing ",
      Heading: "Best Digital Marketing Strategies You should be Using",
      Summary:
        "It has survived only five centuries, but also the leap into electronic typesetting, remaining ",
      Date: "15-11-2022",
      Text: [
        "It all started a couple of weeks ago when I was going through my feed on X. It feels weird to call “Twitter” by a different name now. It’s like that kid in high school whom you’ve known by one name for a long time suddenly changes their name, just feels odd.",
        "I thought long and hard about it and proceeded to read the rest ofthe thread. Artiom made some very logical points highlighting the need for designers to grow by focusing on things that bring business value beyond pixels. He also had some pointers on how to do this:",
      ],
    },
    {
      FirstName: "Tarun",
      LastName: "Jakkula",
      Year: "Fourth Year",
      Dept: "CSE",
      Image: "Hi",
      Domain: "Digital Marketing ",
      Heading: "Best Digital Marketing Strategies You should be Using",
      Summary:
        "It has survived only five centuries, but also the leap into electronic typesetting, remaining ",
      Date: "15-11-2022",
      Text: [
        "It all started a couple of weeks ago when I was going through my feed on X. It feels weird to call “Twitter” by a different name now. It’s like that kid in high school whom you’ve known by one name for a long time suddenly changes their name, just feels odd.",
        "I thought long and hard about it and proceeded to read the rest ofthe thread. Artiom made some very logical points highlighting the need for designers to grow by focusing on things that bring business value beyond pixels. He also had some pointers on how to do this:",
      ],
    },
    {
      FirstName: "Tarun",
      LastName: "Jakkula",
      Year: "Fourth Year",
      Dept: "CSE",
      Image: "Hi",
      Domain: "Digital Marketing ",
      Heading: "Best Digital Marketing Strategies You should be Using",
      Summary:
        "It has survived only five centuries, but also the leap into electronic typesetting, remaining  ",
      Date: "15-11-2022",
      Text: [
        "It all started a couple of weeks ago when I was going through my feed on X. It feels weird to call “Twitter” by a different name now. It’s like that kid in high school whom you’ve known by one name for a long time suddenly changes their name, just feels odd.",
        "I thought long and hard about it and proceeded to read the rest ofthe thread. Artiom made some very logical points highlighting the need for designers to grow by focusing on things that bring business value beyond pixels. He also had some pointers on how to do this:",
      ],
    },
  ];

  const blogScroll = useRef(null);
  const eventScroll = useRef(null);
  function scrollHandler(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Header
        blog={blogs[0]}
        blogScroll={blogScroll}
        eventScroll={eventScroll}
        scrollHandler={scrollHandler}
      />
      <Body blogs={blogs} blogScroll={blogScroll} eventScroll={eventScroll} />
    </>
  );
}
