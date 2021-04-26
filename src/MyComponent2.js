import React from "react";

import { RenderPropsComp } from "./RenderPropsComp";

function MyComponent2({ text }) {
  return (
    <RenderPropsComp color="red" borderWidth={20}>
      <RenderPropsComp color="maroon" borderWidth={15}>
        {() => {
          return (
            <div>
              <h2>My Component with Render Props</h2>
              <p>{text}</p>
            </div>
          );
        }}
      </RenderPropsComp>
    </RenderPropsComp>
  );
}

export default MyComponent2;
