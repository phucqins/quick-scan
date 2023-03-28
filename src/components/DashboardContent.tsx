import { useState } from "react";
import Button from "./Button";
import ProjectStages from "./ProjectStages";

const sampleConfig = [
  { text: "Main", path: "#" },
  { text: "Project Stages", path: "#" },
  { text: "Tasks", path: "#" },
  { text: "Messages", path: "#" },
  { text: "Chat", path: "#" },
  { text: "Members", path: "#" },
  { text: "Customer", path: "#" },
  { text: "Files", path: "#" },
  { text: "Activity", path: "#" },
];

const sampleContent = [
  {
    count: 1,
    title: "Develop Chat Application",
    flag: 10,
    friend: 6,
    color: "#FFCB33",
  },
  {
    count: 2,
    title: "Effective Advertising",
    flag: 10,
    friend: 6,
    color: "#29CC39",
  },
  {
    count: 3,
    title: "Development and Testing",
    flag: 10,
    friend: 6,
    color: "#8833FF",
  },
  {
    count: 4,
    title: "Customer Approval",
    flag: 10,
    friend: 6,
    color: "#33BFFF",
  },
  {
    count: 5,
    title: "Launch of the project",
    flag: 10,
    friend: 6,
    color: "#FF6633",
  },
  {
    count: 6,
    title: "Reconciliation and recei ...",
    flag: 10,
    friend: 6,
    color: "#3361FF",
  },
];

const DashboardContent = () => {
  const [type, setType] = useState("Project Stages");

  const showContentHelper = (type: string) => {
    switch (type) {
      case "Project Stages":
        return <ProjectStages data={sampleContent} />;
      default:
        return (
          <div className="dashboard__content__body__blank flex">
            <h1>Coming Soon</h1>
          </div>
        );
    }
  };

  const handleNextPress = (type: string, setType: (_: string) => void) => {
    const nextTypeIndex = sampleConfig.findIndex((el) => el.text === type) + 1;
    if (nextTypeIndex <= sampleConfig.length - 1)
      return setType(sampleConfig[nextTypeIndex].text);
    return setType(sampleConfig[0].text);
  };

  const handlePrevPress = (type: string, setType: (_: string) => void) => {
    const prevTypeIndex = sampleConfig.findIndex((el) => el.text === type) - 1;
    console.log(prevTypeIndex);
    if (prevTypeIndex >= 0) return setType(sampleConfig[prevTypeIndex].text);
    return setType(sampleConfig[sampleConfig.length - 1].text);
  };

  return (
    <div>
      <div className="dashboard__content__head-section">
        <div className="dashboard__content__sub-header flex">
          <Button
            type="navLeft"
            action={() => handlePrevPress(type, setType)}
          />
          <div className="dashboard__content__sub-header__nav flex">
            {sampleConfig.map((data, i) => {
              return (
                <button
                  onClick={() => {
                    setType(data.text);
                  }}
                  key={i}
                  className={`${data.text === type ? "btn-active" : ""}`}
                >
                  {data.text}
                </button>
              );
            })}
          </div>
          <Button
            type="navRight"
            action={() => handleNextPress(type, setType)}
          />
        </div>
      </div>
      <div className="dashboard__content__body-wrapper  flex-col">
        {showContentHelper(type)}
      </div>
    </div>
  );
};

export default DashboardContent;
