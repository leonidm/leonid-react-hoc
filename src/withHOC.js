import React from "react";

export default function(color = 'red', borderWidth = 5) {
  return function(Component) {
    return function(props) {
      return (
        <div style={{ border: `${borderWidth}px solid ${color}` }}>
          <Component {...props}/>
        </div>
      );
    };
  };
}
