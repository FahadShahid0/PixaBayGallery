import React from "react";
import NavBar from "../navbar";

function PageLayout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default PageLayout;
