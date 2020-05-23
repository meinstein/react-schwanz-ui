import * as React from "react";
import cn from "classnames";

export const textInputBaseClassnames = [
  "appearance-none",
  "border",
  "rounded",
  "w-full",
  "py-4",
  "px-3",
  "text-black",
  "border-gray-700",
  "leading-tight",
  "focus:outline-none",
  "focus:shadow-outline",
  "disabled:opacity-75",
  "disabled:cursor-not-allowed",
];

type ModifiedInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface Props extends ModifiedInput {
  onChange?: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({ onChange, className, ...props }) => {
  return (
    <input
      type="text"
      onChange={(event: React.SyntheticEvent): void => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        onChange(value);
      }}
      className={cn(textInputBaseClassnames, className)}
      {...props}
    />
  );
};
