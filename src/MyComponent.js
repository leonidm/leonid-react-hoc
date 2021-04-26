import React from "react";
import { compose } from "hoc-compose";

import withHoc from "./withHOC";

function MyComponent({ text }) {
  return (
    <div>
      <h2>My Component !!!</h2>
      <p>{text}</p>
    </div>
  );
}

export default compose(
  withHoc("aqua", 8),
  withHoc("green", 6)
)(MyComponent);
