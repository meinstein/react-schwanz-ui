import * as React from "react";

import { Label, TextInput } from "../";

export const LabelDemo: React.FC = () => {
  return (
    <>
      <Label position="top" text="Top Label">
        <TextInput placeholder="Enter your name" onChange={() => ({})} />
      </Label>
      <div style={{ height: "1rem" }} />
      <Label position="bottom" text="Bottom Label">
        <TextInput placeholder="Enter your name" onChange={() => ({})} />
      </Label>
    </>
  );
};
