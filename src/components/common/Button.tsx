import React from "react";

interface buttonProps {
  name: string;
  color?: "lenear" | "blue";
}

function Button(props: buttonProps) {
  const {name, color = "lenear"} = props;
  return (
    <button
      className={`text-sm px-[25px] rounded-sm duration-300 text-white ${
        color === "lenear"
          ? "bg-primary hover:bg-100"
          : "bg-blue-300/20 hover:bg-blue-300/30"
      }`}
    >
      {name}
    </button>
  );
}

export default Button;
