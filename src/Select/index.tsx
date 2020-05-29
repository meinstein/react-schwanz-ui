import * as React from "react";
import cn from "classnames";

type ModifiedSelect = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange">;

interface Props extends ModifiedSelect {
  onChange?: (value: string) => void;
}

const baseSelectClassnames = [
  "rs-block",
  "rs-appearance-none",
  "rs-w-full",
  "rs-bg-white",
  "rs-border",
  "rs-border-gray-700",
  "rs-px-4",
  "rs-py-4",
  "rs-pr-8",
  "rs-rounded",
  "rs-leading-tight",
  "rs-focus:outline-none",
  "rs-focus:shadow-outline",
  "disabled:rs-cursor-not-allowed",
  "disabled:rs-opacity-75",
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
      className={cn("rs-inline-block", "rs-relative", "rs-w-full", {
        "rs-cursor-not-allowed": disabled,
        "rs-cursor-pointer": !disabled,
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
          "rs-pointer-events-none",
          "rs-absolute",
          "rs-inset-y-0",
          "rs-right-0",
          "rs-flex",
          "rs-items-center",
          "rs-px-2",
          "rs-text-gray-700"
        )}
      >
        <svg
          className={cn("rs-fill-current", "rs-h-4", "rs-w-4")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
