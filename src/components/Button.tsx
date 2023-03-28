import IconAddMore from "../assets/Icons/IconAddMore";
import IconDirectLeft from "../assets/Icons/IconDirectLeft";
import IconDirectRight from "../assets/Icons/IconDirectRight";
import IconMagnifier from "../assets/Icons/IconMagnifier";

type buttonProps = {
  type: string;
  action?: ((...args: any[]) => void) | undefined;
};

const Button = (props: buttonProps) => {
  const { type, action } = props;
  if (type === "navLeft")
    return (
      <button onClick={action} className="btn-small">
        <IconDirectLeft />
      </button>
    );

  if (type === "navRight")
    return (
      <button onClick={action} className="btn-small">
        <IconDirectRight />
      </button>
    );

  if (type === "search")
    return (
      <button onClick={action} className="btn-large flex">
        <IconMagnifier /> <p>Search Task</p>
      </button>
    );

  if (type === "double")
    return (
      <div className="btn-double">
        <button onClick={action} className="btn-double__left">
          <p>List of Stages</p>
        </button>
        <button onClick={action} className="btn-double__right">
          <p>Stages Calendar</p>
        </button>
      </div>
    );

  return (
    <button onClick={action} className="btn-large flex">
      <IconAddMore /> <p>Add New Page</p>
    </button>
  );
};

export default Button;
