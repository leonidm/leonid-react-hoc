import React from "react";
import "./style.css";

import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";

export default function App() {
  return (
    <>
      <div>
        <MyComponent text="Welcome" />
      </div>
      <br/>
      <div>
        <MyComponent2 text="Welcome" />
      </div>
    </>
  );
}
