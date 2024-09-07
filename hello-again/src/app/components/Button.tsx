import classNames from "classnames";
import { ReactNode } from "react";

const COLOR_CLASS_MAP = {
  cream: "bg-ha-cream",
  "dirty-green": "bg-ha-dirty-green",
  maroon: "bg-ha-maroon",
  grey: "bg-ha-grey",
};

interface IButton {
  children: ReactNode;
  color?: "cream" | "dirty-green" | "maroon" | "grey";
  onClick: () => void;
}

export default function Button({ children, onClick, color }: IButton) {
  return (
    <div
      className={classNames(
        "flex justify-center wrap border border-ha-dirty-green rounded cursor-pointer w-fit py-2 px-4",
        color && COLOR_CLASS_MAP[color],
        {
          "text-ha-dirty-green": color === "cream",
          "text-ha-cream": 
            color && ["dirty-green", "maroon", "grey"].includes(color),
        }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
