import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner />
        <Preview />
      </div>
    );
  }
}

export default Main;
