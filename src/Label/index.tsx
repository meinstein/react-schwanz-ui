import * as React from "react";
import cn from "classnames";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label: React.FC<Props> = ({ children, text, className, ...props }) => {
  const child = React.Children.only(children);
  const htmlFor = text
    ?.split(" ")
    .map((b) => b.trim())
    .join("-");

  return (
    <>
      <label
        htmlFor={htmlFor}
        className={cn(
          "rs-block",
          "rs-text-black",
          "rs-text-sm",
          "rs-font-semibold",
          "rs-uppercase",
          "rs-mb-1",
          className
        )}
        {...props}
      >
        {text}
      </label>
      {React.isValidElement(child) && React.cloneElement(child, { id: htmlFor })}
    </>
  );
};
