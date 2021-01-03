import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const photoGenre = [
  { name: "street", image: "", url: "/photography/street" },
  { name: "portrait", image: "", url: "/photography/portrait" },
  { name: "architecture", image: "", url: "/photography/architecture" },
  { name: "automotive", image: "", url: "/photography/automotive" },
];

const Photography = () => {
  return (
    <StyledPhotography>
      <div>
        <ul>
          {photoGenre.map((genre) => {
            return (
              <motion.li
                whileHover={{ scale: 1.1, transiton: { duration: 1 } }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={genre.url}>
                  <h2>{genre.name}</h2>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </StyledPhotography>
  );
};

const StyledPhotography = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 70vh;
  h2 {
    font-size: 2rem;
    letter-spacing: 4px;
    padding: 1rem;
  }
  ul {
    list-style-type: none;
  }
`;

export default Photography;
