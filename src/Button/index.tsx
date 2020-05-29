import * as React from "react";
import cn from "classnames";

type ButtonType = "primary" | "secondary" | "warning";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  buttonType?: ButtonType;
}

const baseClassnames = [
  "rs-font-semibold",
  "rs-uppercase",
  "rs-text-sm",
  "rs-tracking-wide",
  "rs-rounded",
  "rs-disabled:opacity-75",
  "rs-border-2",
];

const buttonTypeClasses: { [key in ButtonType]: string[] } = {
  primary: ["rs-p-4", "rs-bg-gray-800", "rs-text-white", "rs-border-gray-800"],
  secondary: ["rs-p-4", "rs-bg-white", "rs-text-gray-800", "rs-border-gray-800"],
  warning: ["rs-p-4", "rs-bg-red-600", "rs-text-white", "rs-border-red-600"],
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
      className={cn(
        baseClassnames,
        className,
        buttonTypeClasses[buttonType],
        { "rs-disabled:cursor-not-allowed": disabled && !loading },
        { "rs-disabled:cursor-wait": disabled && loading }
      )}
      {...unused}
    >
      {loading ? <span className={cn("rs-italic")}>Loading...</span> : children}
    </button>
  );
};
