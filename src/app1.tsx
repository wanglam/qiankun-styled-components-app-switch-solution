import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Navigation from "./Navigation";

const Clock = styled.div<{ dateTime: string }>`
  &::after {
    ${({ dateTime }) => `content: "${dateTime}";`}
  }
`;

function App() {
  const [dateTime, setDatetime] = useState("");

  setInterval(() => {
    setDatetime(new Date().toString());
  }, 1000);
  return (
    <>
      <h1>Sub App 1</h1>
      <Navigation />
      <Clock
        style={{ background: "skyblue", padding: "4px 10px", color: "white" }}
        dateTime={dateTime}
      />
      <div>Date Time: {dateTime}</div>
    </>
  );
}

export async function bootstrap() {}

export async function mount({ container }: { container: HTMLElement }) {
  ReactDOM.render(<App />, container.querySelector("#root"));
}

export async function unmount({ container }: { container: HTMLElement }) {
  ReactDOM.unmountComponentAtNode(container.querySelector("#root"));
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  mount({ container: document.body });
}
