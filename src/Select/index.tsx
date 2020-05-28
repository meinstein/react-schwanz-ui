import * as React from "react";
import cn from "classnames";

type ModifiedSelect = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange">;

interface Props extends ModifiedSelect {
  onChange?: (value: string) => void;
}

const baseSelectClassnames = [
  "block",
  "appearance-none",
  "w-full",
  "bg-white",
  "border",
  "border-gray-700",
  "px-4",
  "py-4",
  "pr-8",
  "rounded",
  "leading-tight",
  "focus:outline-none",
  "focus:shadow-outline",
  "disabled:cursor-not-allowed",
  "disabled:opacity-75",
];

export const Select: React.FC<Props> = ({
  onChange,
  children,
  value,
  defaultValue,
  disabled,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("inline-block", "relative", "w-full", {
        "cursor-not-allowed": disabled,
        "cursor-pointer": !disabled,
      })}
    >
      <select
        className={cn(baseSelectClassnames, cn)}
        onChange={(event: React.SyntheticEvent): void => {
          event.preventDefault();
          const target = event.target as HTMLSelectElement;
          onChange(target.value);
        }}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
      <div
        className={cn(
          "pointer-events-none",
          "absolute",
          "inset-y-0",
          "right-0",
          "flex",
          "items-center",
          "px-2",
          "text-gray-700"
        )}
      >
        <svg
          className={cn("fill-current", "h-4", "w-4")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
