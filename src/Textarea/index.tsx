import * as React from "react";
import cn from "classnames";

import { textInputBaseClassnames } from "..";

type ModifiedTextarea = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">;

interface Props extends ModifiedTextarea {
  onChange?: (value: string) => void;
}

export const Textarea: React.FC<Props> = ({ onChange, className, ...unused }) => {
  return (
    <textarea
      className={cn(textInputBaseClassnames, className)}
      onChange={(event: React.SyntheticEvent): void => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        onChange(value);
      }}
      {...unused}
    />
  );
};
