import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { genreList } from "../photos/photoInfo";

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
      <div className="photo-grid">
        {current.images.map((photo) => {
          return (
            <div className={`card ${photo.type}`}>
              <img src={photo.url} alt={photo.alt} />
            </div>
          );
        })}
      </div>
    </StyledImage>
  );
};

const StyledImage = styled(motion.div)`
  padding: 3rem clamp(2rem, 20vw, 50rem);
  @media screen and (max-width: 1600px) {
    padding: 2rem 10rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 5rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1.5rem 1.5rem;
  }
  @media screen and (max-width: 350px) {
    padding: 1.5rem 1rem;
  }
  text-align: center;
  .photo-grid {
    display: grid;
    justify-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }
  @media screen and (min-width: 600px) {
    // collapse below 600px
    .photo-grid {
      grid-auto-rows: 240px;
    }
    .card-tall {
      grid-row: span 2 / auto;
    }
    .card-wide {
      grid-column: span 2 / auto;
    }
    .square {
      grid-row: span 2 / auto;
      grid-column: span 2 / auto;
    }
  }
`;

const PhotoText = styled(motion.div)`
  padding-bottom: 3rem;
  h2 {
    font-size: clamp(40px, 3vw, 70px);
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
