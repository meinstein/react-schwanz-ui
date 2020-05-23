import * as React from "react";
import classNames from "classnames";

type ButtonType = "primary" | "secondary" | "warning";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  buttonType?: ButtonType;
}

const baseClassnames = [
  "font-semibold",
  "uppercase",
  "text-sm",
  "tracking-wide",
  "rounded",
  "disabled:opacity-75",
  "border-2",
];

const buttonTypeClasses: { [key in ButtonType]: string[] } = {
  primary: ["p-4", "bg-gray-800", "text-white", "border-gray-800"],
  secondary: ["p-4", "bg-white", "text-gray-800", "border-gray-800"],
  warning: ["p-4", "bg-red-600", "text-white", "border-red-600"],
};

export const Button: React.FC<Props> = ({
  className,
  loading,
  buttonType = "primary",
  disabled,
  children,
  ...unused
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={classNames(
        baseClassnames,
        className,
        buttonTypeClasses[buttonType],
        { "disabled:cursor-not-allowed": disabled && !loading },
        { "disabled:cursor-wait": disabled && loading }
      )}
      {...unused}
    >
      {loading ? <span className="italic">Loading...</span> : children}
    </button>
  );
};
