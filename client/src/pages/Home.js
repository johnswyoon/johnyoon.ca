import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import memoji from "../assets/img/memoji.png";

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
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
            >
              &gt; view portfolio &lt;
            </motion.p>
          </em>
        </Link>
      </HeroText>
      <HeroImage>
        <motion.img
          src={memoji}
          alt="John Yoon's Apple Memoji"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        />
      </HeroImage>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
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
    width: 400px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    img {
      width: 325px;
      margin-top: 1rem;
    }
  }
`;

export default Home;
