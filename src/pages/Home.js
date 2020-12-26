import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <div className="circle">
        <h2>Hello Friends</h2>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 70vh;
    background-color: #fbcf33;
    border-radius: 50%;
  }
`;

export default Home;
