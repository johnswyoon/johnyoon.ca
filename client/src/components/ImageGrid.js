import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { genreList } from "../photos/photoInfo";

//Masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGrid = () => {
  const { genre } = useParams();
  let current = {};
  for (let i = 0; i < genreList.length; i++) {
    if (genreList[i].id === genre) {
      current = genreList[i];
    }
  }
  return (
    <StyledImage>
      <PhotoText>
        <h2>{current.title}</h2>
        <p>
          <em>{current.description}</em>
        </p>
      </PhotoText>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 1, 750: 2, 1200: 3, 1600: 4, 2000: 5 }}
      >
        <Masonry columnsCount={5} gutter="2.5rem">
          {current.images.map((image, i) => (
            <img
              key={i}
              src={image.url}
              style={{ width: "100%", display: "block" }}
              alt={image.alt}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </StyledImage>
  );
};

const StyledImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 2250px;
  margin: auto;

  padding: 1rem 3rem;
  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 1.5rem 1.5rem;
  }
  @media screen and (max-width: 350px) {
    padding: 1.5rem 1rem;
  }
`;

const PhotoText = styled(motion.div)`
  text-align: center;
  padding-bottom: 3rem;
  h2 {
    font-size: clamp(40px, 3vw, 60px);
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 1rem;
  }
`;

export default ImageGrid;
