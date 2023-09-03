import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

function Button({
  children,
  full,
  color,
  bgColor,
  ...rest
}: {
  children: ReactNode;
  full?: boolean;
  color?: string;
  bgColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`${
        full && "w-full"
      } px-3 text-sm disabled:bg-gray-300 rounded-lg my-2 py-2 ${
        bgColor ? bgColor : "bg-green-500"
      } border-4 active:border-green-300 ${
        color ? color : "text-white"
      } inline`}
    >
      {children}
    </button>
  );
}

export default Button;
