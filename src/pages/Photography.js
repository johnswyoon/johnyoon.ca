import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const photoURL = [
  {
    url:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    type: "card square",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
    type: "card card-tall",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
    type: "card square",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    type: "card",
  },
  {
    url:
      "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    type: "card",
  },
];

const Photography = () => {
  return (
    <StyledAbout>
      <div>
        <h2>Street</h2>
        <p>"The documentation of human existance"</p>
      </div>
      <div className="photo-grid">
        {photoURL.map((photo) => {
          return (
            <div className={photo.type}>
              <img src={photo.url} alt="" />
            </div>
          );
        })}
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  padding: 2rem clamp(2rem, 20vw, 50rem);
  @media screen and (max-width: 1600px) {
    padding: 2rem 10rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 5rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
  @media screen and (max-width: 350px) {
    padding: 1rem;
  }
  text-align: center;
  .photo-grid {
    display: grid;
    justify-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 600px) {
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

export default Photography;
