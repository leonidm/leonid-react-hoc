import React from "react";

export function RenderPropsComp({ color, borderWidth, children }) {
  return (
    <div style={{ border: `${borderWidth}px solid ${color}` }}>
      {children instanceof Function ? children() : children}
    </div>
  );
}
