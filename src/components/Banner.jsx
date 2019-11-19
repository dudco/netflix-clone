import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  padding: 20px 58px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 100%;
  margin-right: 30px;
`;

const NavText = styled.ul`
  display: flex;
  color: white;
  list-style: none;

  height: 100%;
  flex: 1;

  align-items: center;
`;

const NavTextItem = styled.li`
  margin-right: 20px;
  color: #e5e5e5;
  &:hover {
    color: #b3b3b3;
  }

  &.select {
    color: white;
    font-weight: bold;
  }
`;

const NavIcon = styled.ul`
  display: flex;
  list-style: none;

  height: 100%;
`;

const NavIconItem = styled.li`
  width: fit-content;
  margin-right: 60px;
  & > img {
    height: 100%;
  }
`;

const Banner = props => {
  return (
    <Wrapper>
      <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" />
      <NavText>
        <NavTextItem className="select">홈</NavTextItem>
        <NavTextItem>TV 프로그램</NavTextItem>
        <NavTextItem>영화</NavTextItem>
        <NavTextItem>최신 등록 콘텐츠</NavTextItem>
        <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
      </NavText>
      <NavIcon>
        <NavIconItem>
          <img src="/search.svg" alt="" />
        </NavIconItem>
        <NavIconItem>
          <img src="/gift.svg" alt="" />
        </NavIconItem>
        <NavIconItem>
          <img src="/bell.svg" alt="" />
        </NavIconItem>
      </NavIcon>
    </Wrapper>
  );
};

export default Banner;
