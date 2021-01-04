import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import memoji from "../assets/img/memoji.jpg";

const Home = () => {
  return (
    <StyledHome>
      <HeroText>
        <h2>john yoon</h2>
        <p>A visual collection of my creative process.</p>
        <Link to="/photography">
          <em>
            <motion.p
              id="call-to-action"
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9 }}
            >
              view portfolio
            </motion.p>
          </em>
        </Link>
      </HeroText>
      <HeroImage>
        <img src={memoji} alt="John Yoon's Apple Memoji" />
      </HeroImage>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  max-width: 80vw;
  h2 {
    font-size: clamp(40px, 5vw, 70px);
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
  #call-to-action {
    display: inline-block;
    text-decoration: underline;
    margin-bottom: 0;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    min-width: 100%;
    padding: 3rem 2rem;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  img {
    width: 350px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    img {
      width: 300px;
      margin-top: 1rem;
    }
  }
`;

export default Home;
