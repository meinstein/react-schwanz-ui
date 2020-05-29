import * as React from "react";
import cn from "classnames";

export interface MetaItem {
  key: string | React.ReactNode;
  value: string | React.ReactNode;
}

interface Props {
  items: MetaItem[];
}

export const MetaItems: React.FC<Props> = ({ items }) => {
  return (
    <div className={cn("w-full")}>
      {items.map(({ key, value }, idx) => {
        return (
          <div
            key={idx}
            className={cn(
              "rs-flex",
              "rs-justify-between",
              "rs-items-start",
              "rs-w-full",
              "rs-p-3",
              "rs-border-gray-200",
              "rs-border-t",
              { "rs-last:border-b": idx % 2 === 0 },
              { "rs-bg-gray-100": idx % 2 === 0 }
            )}
          >
            <span className={cn("rs-font-semibold", "rs-w-1/2", "rs-uppercase", "rs-text-sm")}>
              {key}
            </span>
            <span className={cn("rs-w-1/2", "rs-flex", "rs-justify-end", "rs-items-center")}>
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
};
