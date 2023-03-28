import IconCalendar from "../assets/Icons/IconCalendar";
import IconHome from "../assets/Icons/IconHome";
import IconTask from "../assets/Icons/IconTask";
import IconChat from "../assets/Icons/IconChat";
import IconMessageFIlled from "../assets/Icons/IconMessageFIlled";
import IconChart from "../assets/Icons/IconChart";
import IconMoreDot from "../assets/Icons/IconMoreDot";
import IconRightArrow from "../assets/Icons/IconRightArrow";
import IconArrowDown from "../assets/Icons/IconArrowDown";
import IconArrowRight from "../assets/Icons/IconArrowRight";

const sampleData = {
  first: [
    {
      title: "My projects",
      icon: <IconHome />,
      number: 9,
      numBackground: "#a05cff",
    },
    {
      title: "Chats",
      icon: <IconChat />,
      number: 2,
      numBackground: "#ff6633",
    },
    {
      title: "Tasks",
      icon: <IconTask />,
      number: null,
      numBackground: "#33bfff",
    },
    {
      title: "Calendars",
      icon: <IconCalendar />,
      number: 9,
      numBackground: "#29cc39",
    },

    {
      title: "Messages",
      icon: <IconMessageFIlled />,
      number: null,
      numBackground: "#3361ff",
    },
    {
      title: "Statistics",
      icon: <IconChart />,
      number: null,
      numBackground: "#ffcb33",
    },
  ],
  second: [
    { title: "Projects on Deadlines", icon: <IconMoreDot /> },
    { title: "Chats", icon: <IconRightArrow /> },
  ],
  third: [
    { title: "Projects", number: 3, numBackground: "#29CC39" },
    { title: "Tasks", number: 9, numBackground: "#8833FF" },
    { title: "Messages", number: 2, numBackground: "#3361FF" },
    { title: "Chats", number: 1, numBackground: "#FF6633" },
  ],
  fourth: [
    { title: "City Advertising Campaign" },
    { title: "Web Application Development" },
    { title: "Twitter App" },
    { title: "Facebook Application" },
  ],
};

const SideBar = () => {
  return (
    <div className="sidebar flex-col">
      <div className="sidebar__first flex-col">
        {sampleData["first"].map((data, i) => {
          return (
            <div key={i} className="sidebar__first__item">
              <div className="sidebar__first__item__icon">{data.icon}</div>
              <div className="sidebar__first__item__title">{data.title}</div>
              {data.number && (
                <div
                  style={{ background: `${data.numBackground}` }}
                  className="sidebar__first__item__number flex"
                >
                  <p>{data.number}</p>
                </div>
              )}
              <button>
                <IconArrowDown />
              </button>
            </div>
          );
        })}
      </div>
      <div className="sidebar__second flex-col  ">
        <div className="sidebar__second__wrapper">
          {sampleData["second"].map((data, i) => {
            return (
              <div key={i} className="sidebar__second__item flex">
                <div className="sidebar__second__item__title">{data.title}</div>
                <button>{data.icon}</button>
              </div>
            );
          })}
        </div>
        <div className="sidebar__sub-second flex">
          {sampleData["third"].map((data, i) => {
            return (
              <div key={i} className="sidebar__sub-second__item flex-col">
                <div className="sidebar__sub-second__item__title">
                  {data.title}
                </div>
                <div
                  style={{ background: `${data.numBackground}` }}
                  className="sidebar__sub-second__item__number flex"
                >
                  <p>{data.number}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sidebar__semi-sub-second flex-col">
          <div className="sidebar__semi-sub-second__header flex">
            <p>Recent Projects</p>
            <IconMoreDot />
          </div>
          <div className="sidebar__semi-sub-second__content flex">
            {sampleData["fourth"].map((data, i) => {
              return (
                <div key={i} className="sidebar__semi-sub-second__item flex">
                  <div className="sidebar__semi-sub-second__item__title">
                    {data.title}
                  </div>
                  <button>
                    <IconArrowRight />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
