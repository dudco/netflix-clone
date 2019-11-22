import React from "react";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import styled from "styled-components";
import axios from "axios";
import withLayout from "../components/withLayout";

const MovieContainerWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
class Tv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Preview />
        <MovieContainerWrapper
          style={{ marginTop: "45%", overflowX: "hidden", width: "100%" }}
        >
          <MovieContainer title="TV프로그램" movies={[{ title: "Test" }]} />
        </MovieContainerWrapper>
      </>
    );
  }
}
export default withLayout(Tv);
