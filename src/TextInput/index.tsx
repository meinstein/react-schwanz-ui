import * as React from "react";
import cn from "classnames";

export const textInputBaseClassnames = [
  "rs-appearance-none",
  "rs-border",
  "rs-rounded",
  "rs-w-full",
  "rs-py-4",
  "rs-px-3",
  "rs-text-black",
  "rs-border-gray-700",
  "rs-leading-tight",
  "rs-focus:outline-none",
  "rs-focus:shadow-outline",
  "disabled:rs-opacity-75",
  "disabled:rs-cursor-not-allowed",
];

type ModifiedInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">;

interface Props extends ModifiedInput {
  type: "text" | "email" | "password" | "url";
  onChange?: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({ onChange, type = "text", className, ...props }) => {
  return (
    <input
      type={type}
      className={cn(textInputBaseClassnames, className)}
      onChange={(event: React.SyntheticEvent): void => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        onChange(value);
      }}
      {...props}
    />
  );
};
