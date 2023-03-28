import { Link, NavLink } from "react-router-dom";
import IconChart from "../assets/Icons/IconChart";
import IconFriends from "../assets/Icons/IconFriends";
import IconMagnifier from "../assets/Icons/IconMagnifier";
import IconMessage from "../assets/Icons/IconMessage";
import IconMoreDot from "../assets/Icons/IconMoreDot";
import IconNavBar from "../assets/Icons/IconNavBar";
import IconRingBell from "../assets/Icons/IconRingBell";

type HeaderProps = {};

const sampleConfig = [
  { text: "Dashboard", path: "/" },
  { text: "Pages", path: "/test1" },
  { text: "Posts", path: "/test2" },
  { text: "Files", path: "/test3" },
  { text: "Users", path: "/test4" },
];

const Header = (props: HeaderProps) => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#8833ff" : "",
  });

  return (
    <div className="header">
      <nav className="header__nav flex">
        <button className="header__nav__btn flex">
          <IconNavBar />
        </button>
        <h2>Constructor</h2>
        <ul className="flex">
          {sampleConfig.map((item, index) => (
            <li key={index}>
              <NavLink style={navLinkStyle} to={item.path}>
                {item.text}
              </NavLink>
            </li>
          ))}
          <IconMoreDot />
        </ul>
      </nav>
      <div className="header__search flex">
        <input type="text" placeholder={'Try searching "NewProducts"'} />
        <button className="header__search__btn flex">
          <IconMagnifier />
        </button>
      </div>
      <div className="header__action flex">
        <button className="header__action__btn__noti flex">
          <IconRingBell />
        </button>
        <button className="header__action__btn flex">
          <IconMessage />
        </button>
        <button className="header__action__btn flex">
          <IconFriends />
        </button>
        <button className="header__action__btn flex">
          <IconChart fill="#C3CAD9" />
        </button>
      </div>
    </div>
  );
};

export default Header;
