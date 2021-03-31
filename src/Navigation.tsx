import * as React from "react";

function Navigation() {
  return (
    <div>
      <span
        onClick={() => {
          history.replaceState(null, document.title, "/app1");
        }}
      >
        App1
      </span>
      <span
        onClick={() => {
          history.replaceState(null, document.title, "/app2");
        }}
      >
        App2
      </span>
      <span
        onClick={() => {
          history.replaceState(null, document.title, "/app3");
        }}
      >
        App3
      </span>
    </div>
  );
}

export default Navigation;
