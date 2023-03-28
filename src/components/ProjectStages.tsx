import Button from "./Button";
import DashboardCard from "./DashboardCard";

type typeProps = {
  data: {
    count: number;
    title: string;
    flag: number;
    friend: number;
    color: string;
  }[];
};

const ProjectStages = ({ data }: typeProps) => {
  return (
    <div>
      <div className="dashboard__content__actions flex">
        <Button type="search" />
        <Button type="double" />
        <Button type="add" />
      </div>
      <div className="dashboard__content__body">
        {data.map((el, i) => {
          const { count, title, flag, friend, color } = el;
          return (
            <DashboardCard
              key={i}
              count={count}
              title={title}
              flag={flag}
              friend={friend}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectStages;
