import EventPanel from "./EventPanel";

export default function EventsList({ eventScroll }) {
  const Events = [
    {
      Image: "Hi",
      Heading: "Google Cloud Study Jams - 2",
      Date: "Oct 7, 2023",
    },
    {
      Image: "Hi",
      Heading: "Google Cloud Study Jams - 2",
      Date: "Oct 7, 2023",
    },
    {
      Image: "Hi",
      Heading: "Google Cloud Study Jams - 2",
      Date: "Oct 7, 2023",
    },
    {
      Image: "Hi",
      Heading: "Google Cloud Study Jams - 2",
      Date: "Oct 7, 2023",
    },
  ];

  return (
    <div ref={eventScroll}>
      <div className=" px-[20px] mt-[50px] flex flex-wrap items-center justify-between">
        <span className="font-[700] text-[60px] tracking-wider leading-[118.5px] text-[#15144B] mr-[40px]">
          Events
        </span>
        <button className="text-white text-[20px] font-black tracking-wider credentials-button px-[50px] ">
          Load More
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-around ">
        {Events.map((obj, index) => {
          // if (index < 2)
          return (
            <div key={obj + index}>
              <EventPanel
                Image={Events[index].Image}
                Heading={Events[index].Heading}
                Date={Events[index].Date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
