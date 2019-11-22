import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const BtnSize = "45px";

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;
  width: calc(100% - (${BtnSize} + ${BtnSize}));
  overflow: visible;
  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .container {
    position: relative;
  }

  .slider {
    transform: ${props => `translateX(-${props.translate}px);`}
    transition: 0.3s;
    display: -webkit-box;
  }
`;

const BtnLeft = styled.button`
  width: ${BtnSize};
  height: 100%;
  position: absolute;
  right: 100%;
  z-index: 5;
  opacity: 0;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const BtnRight = styled(BtnLeft)`
  left: 100%;
  right: none;
`;

const MovieContainer = props => {
  const [page, setPage] = React.useState(1);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const slider = React.useRef(undefined);

  React.useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, []);

  const onClickLeft = () => {
    setPage(page - 1);
  };

  const onClickRight = () => {
    setPage(page + 1);
  };

  return (
    <Wrapper translate={(page - 1) * (sliderWidth + 10)}>
      <div className="title">{props.title}</div>
      <div className="container">
        <BtnLeft onClick={onClickLeft}>{"<"}</BtnLeft>
        <BtnRight onClick={onClickRight}>></BtnRight>
        <div className="slider" ref={slider}>
          {(props.movies || []).map((value, idx) => (
            <MovieItem
              key={idx}
              title={value.title}
              backdrop_path={value.backdrop_path}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default MovieContainer;
