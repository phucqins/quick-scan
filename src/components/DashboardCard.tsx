import React from "react";
import IconFlag from "../assets/Icons/IconFlag";
import IconFriends from "../assets/Icons/IconFriends";
import IconShowOn from "../assets/Icons/IconShowOn";

type typeProps = {
  color: string;
  title: string;
  friend: number;
  flag: number;
  count: number;
};

const DashboardCard = (props: typeProps) => {
  const { color, title, friend, count, flag } = props;
  return (
    <div className="dashboard__content__card flex">
      <div
        style={{ background: `${color}` }}
        className="dashboard__content__card__count flex"
      >
        {count}
      </div>
      <p className="dashboard__content__card__title">{title}</p>
      <button>
        <IconShowOn />
        <p>Show on</p>
      </button>
      <div className="dashboard__content__card__footer">
        <div className="flex">
          <IconFlag /> <p>{flag}</p>
        </div>
        <div className="flex">
          <IconFriends /> <p>{friend}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
