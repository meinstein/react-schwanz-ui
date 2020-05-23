import * as React from "react";
import classNames from "classnames";

export interface MetaItem {
  key: string | React.ReactNode;
  value: string | React.ReactNode;
}

interface Props {
  items: MetaItem[];
}

export const MetaItems: React.FC<Props> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map(({ key, value }, idx) => {
        return (
          <div
            key={idx}
            className={classNames([
              "flex",
              "justify-between",
              "items-start",
              "w-full",
              "p-3",
              "border-gray-200",
              "border-t",
              { "last:border-b": idx % 2 === 0 },
              { "bg-gray-100": idx % 2 === 0 },
            ])}
          >
            <span className="font-semibold w-1/2 uppercase text-sm">{key}</span>
            <span className="w-1/2 flex justify-end items-center">{value}</span>
          </div>
        );
      })}
    </div>
  );
};
