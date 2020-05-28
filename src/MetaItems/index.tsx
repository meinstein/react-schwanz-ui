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
              "flex",
              "justify-between",
              "items-start",
              "w-full",
              "p-3",
              "border-gray-200",
              "border-t",
              { "last:border-b": idx % 2 === 0 },
              { "bg-gray-100": idx % 2 === 0 }
            )}
          >
            <span className={cn("font-semibold", "w-1/2", "uppercase", "text-sm")}>{key}</span>
            <span className={cn("w-1/2", "flex", "justify-end", "items-center")}>{value}</span>
          </div>
        );
      })}
    </div>
  );
};
