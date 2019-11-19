import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  overflow-x: hidden;
  & > img {
    width: 100%;
  }
`;

const Detail = styled.div`
  position: absolute;
  top: 27%;
  left: 5%;
  right: 65%;

  & > * {
    width: 100%;
    margin-bottom: 20px;
  }
  &:before {
    background-image: linear-gradient(to bottom, transparent 0%, white 100%);
  }
`;

const ButtonGroup = styled.div`
  /* width: 100%; */
  display: flex;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.55);
  border: none;
  color: white;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:nth-child(1) {
    flex: 1;
  }
  &:nth-child(2) {
    flex: 2;
    margin: 0 15px;
  }
  &:nth-child(3) {
    flex: 1;
  }

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
  }
`;

const Preview = props => {
  return (
    <Wrapper>
      <img
        src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105"
        alt=""
      />
      <Detail>
        <img
          src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABduWV1XI_V1CpMePQjJ8-_aIvKPmyAvR8CAXcOAAOByHH-uTuwXXxspW-VTWODhxZtUSBI1BPK3cvJE818mM1QQ_e73MVBZPxu6c.webp?r=9a5"
          alt=""
        />
        <div>
          격동의 구한말, 불꽃처럼 타오르는 여인이 있다. 조국을 위해 <br />
          가시밭길을 택한 명문가의 규수. 그녀가 한 사내를 만난다. <br />
          동지인지, 적인지, 그저 이방인인지 모를 사내를.
        </div>
        <ButtonGroup>
          <Button>재생</Button>
          <Button>내가 찜한 콘텐츠</Button>
          <Button>상세 정보</Button>
        </ButtonGroup>
      </Detail>
    </Wrapper>
  );
};

export default Preview;
