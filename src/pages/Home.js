import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <StyledHome>
      <h2>Hello Friends</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda
        officiis neque maxime rerum qui aliquam molestiae pariatur? Repellat
        fugit, alias unde mollitia nobis fugiat quas aliquam placeat dicta est,
        tempora sit non ullam maxime ipsam illo pariatur, suscipit laborum
        laudantium incidunt id voluptas dignissimos temporibus possimus. Enim
        id, quidem ab culpa facilis dignissimos nesciunt consequatur nostrum?
        Non dicta placeat aliquam est dolores eum dolorum quas reprehenderit
        unde dolor, nisi mollitia nobis quidem expedita ullam molestias, hic
        repellendus voluptates illum? Explicabo odit doloremque eius corrupti
        modi, laborum porro totam optio sed quos itaque voluptatem neque,
        accusantium velit, officiis eum atque?
      </p>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  padding-left: clamp(30px, 10vw, 1500px);
  padding-right: clamp(30px, 10vw, 1500px);
  text-align: center;
  h2 {
    font-size: clamp(40px, 5vw, 70px);
  }
  p {
  }
`;

export default Home;
