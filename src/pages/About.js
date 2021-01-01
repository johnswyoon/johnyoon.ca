import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profilepic from "../assets/img/dooly.JPEG";
import igIcon from "../assets/icons/ig-100.png";
import inIcon from "../assets/icons/in-100.png";
import ghIcon from "../assets/icons/gh-100.png";
import johnMayer from "../assets/img/albums/room-for-squares.jpg";
import kendrick from "../assets/img/albums/good-kid-maad-city.jpg";
import yerin from "../assets/img/albums/every-letter-i-sent-you.jpg";

const socialList = [
  {
    name: "aycejohn",
    image: igIcon,
    url: "https://www.instagram.com/aycejohn/",
  },
  {
    name: "johnswyoon",
    image: inIcon,
    url: "https://www.linkedin.com/in/johnswyoon/",
  },
  {
    name: "johnswyoon",
    image: ghIcon,
    url: "https://github.com/johnswyoon",
  },
  {
    name: "john.sw.yoon@gmail.com",
    image: "",
    url: "mailto:john.sw.yoon@gmail.com",
  },
];
const gearList = [
  { name: "macbook pro 16", url: "" },
  { name: "sony a6000", url: "" },
  { name: "sigma 30mm f/1.4", url: "" },
];
const songList = [
  {
    title: "No Such Thing",
    album: "Room of Squares",
    artist: "John Mayer",
    image: johnMayer,
    url:
      "https://open.spotify.com/track/0WZhf0isd4av5qlFfKknC3?si=fy6OG2clRW2Fq8ezZ49nkQ",
  },
  {
    title: "Now Or Never",
    album: "good kid, m.A.A.d city (Deluxe Version)",
    artist: "Kendrick Lamar",
    image: kendrick,
    url:
      "https://open.spotify.com/track/4KjnaUNYPwGnJjoeTFlt91?si=K5PvtqxvRl2M8-5c-K4nEQ",
  },
  {
    title: "Square (2017)",
    album: "Every letter I sent you.",
    artist: "백예린",
    image: yerin,
    url:
      "https://open.spotify.com/track/0WZhf0isd4av5qlFfKknC3?si=fktTdj1jRjiu19iAedD0RA",
  },
];

const About = () => {
  return (
    <StyledAbout className="container">
      <SocialColumn>
        <img
          id="profile-pic"
          src={profilepic}
          alt="john yoon profile picture"
        />
        <h3>connect with me</h3>
        <div id="social">
          <ul>
            {socialList.map((social) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.05, transiton: { duration: 10 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={social.url} target="_blank">
                    {social.image && (
                      <img src={social.image} alt={social.name} />
                    )}
                    <p>{social.name}</p>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <h3>my gear</h3>
        <div id="gear">
          <ul>
            {gearList.map((gear) => {
              return (
                <li>
                  <a style={{ justifyContent: "center", cursor: "default" }}>
                    <p>{gear.name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </SocialColumn>
      <TextColumn>
        <h2>Hi, I'm John</h2>
        <div className="intro-text">
          <p>
            I'm a 2nd Year Computer Engineering student at the University of
            Waterloo. I am also a photographer based in Canada, interested in
            portrait, street, and automotive photography.
          </p>
          <p>
            I created this website to showcase my creativity through software
            projects and photography.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            repellat illum. Alias sapiente sit minima repellendus nemo expedita
            sint maxime.
          </p>
          <p>
            Autem, impedit minima optio, recusandae eligendi error, magni ea
            omnis aperiam nam reiciendis vero voluptas.
          </p>
        </div>
        <Songs>
          <h3>Currently Listening To</h3>
          {songList.map((song) => {
            return (
              <ul>
                <motion.li
                  whileHover={{ scale: 1.05, transiton: { duration: 10 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={song.url} target="_blank">
                    <img
                      src={song.image}
                      alt={`${song.title} - ${song.artist}`}
                    />
                    <div className="song-info">
                      <p>
                        <strong>{song.album}</strong>
                      </p>
                      <p>
                        <em>{song.title}</em>
                      </p>
                      <p>
                        <em>{song.artist}</em>
                      </p>
                    </div>
                  </a>
                </motion.li>
              </ul>
            );
          })}
        </Songs>
      </TextColumn>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  h2 {
    /* font-size: 3.5rem; */
    font-size: clamp(40px, 5vw, 3.5rem);
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  h3 {
    /* font-size: 1.75rem; */
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    font-weight: 700;
    letter-spacing: 2px;
    padding: 3rem 0rem 1rem 0rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 2rem;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    h2 {
      margin-top: 5rem;
    }
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding-bottom: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 0rem clamp(1rem, 5vw, 5rem);
  }
`;

const SocialColumn = styled.div`
  padding-right: 5rem;
  @media screen and (max-width: 1024px) {
    padding-right: 0;
  }
  text-align: center;
  #profile-pic {
    width: 250px;
    border-radius: 50%;
    box-shadow: 0 0px 50px -20px rgba(0, 0, 0, 0.5);
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    a {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        margin-right: 1rem;
      }
      p {
        letter-spacing: 2.5px;
        line-height: 2.5rem;
      }
    }
  }
`;

const Songs = styled.div`
  .song-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
  }
  img {
    width: 200px;
    height: 200px;
    margin: 1rem;
    box-shadow: 0 0px 50px -20px rgba(0, 0, 0, 0.4);
  }
  li {
    list-style-type: none;
    a {
      display: flex;
      p {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h3 {
      text-align: center;
    }
    a {
      flex-direction: column;
      align-items: center;
      p {
        line-height: 1.5rem;
        text-align: center;
      }
    }
    .song-info {
      align-items: center;
      padding-left: 0rem;
      p {
        font-size: 1.25rem;
        line-height: 1rem;
      }
    }
  }
`;

export default About;
