import "../src/base.css";
import "../src/utilities.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { LabelDemo } from "../src/Label/demo";

interface ContainerProps {
  title: string;
}

const Container: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <div>
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      {children}
    </div>
  );
};

ReactDOM.render(
  <div style={{ padding: "1rem  " }}>
    <Container title="<Label />">
      <LabelDemo />
    </Container>
  </div>,
  document.getElementById("root")
);
