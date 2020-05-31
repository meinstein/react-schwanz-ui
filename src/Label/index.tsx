import * as React from "react";
import cn from "classnames";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  position?: "top" | "right" | "bottom" | "left";
}

const baseClassnames = cn(
  "rs-block",
  "rs-text-black",
  "rs-text-sm",
  "rs-font-semibold",
  "rs-uppercase"
);

export const Label: React.FC<Props> = ({
  children,
  text,
  className,
  position = "top",
  ...props
}) => {
  const child = React.Children.only(children);
  const htmlFor = Math.floor(Math.random() * 10000000 + 1).toString();

  return (
    <>
      {position === "top" && (
        <label htmlFor={htmlFor} className={cn(baseClassnames, "rs-mb-1", className)} {...props}>
          {text}
        </label>
      )}
      {React.isValidElement(child) && React.cloneElement(child, { id: htmlFor })}
      {position === "bottom" && (
        <label htmlFor={htmlFor} className={cn(baseClassnames, "rs-mt-1", className)} {...props}>
          {text}
        </label>
      )}
    </>
  );
};
