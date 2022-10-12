import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profilepic from "../assets/img/profile.jpg";
import igIcon from "../assets/icons/ig-100.png";
import inIcon from "../assets/icons/in-100.png";
import ghIcon from "../assets/icons/gh-100.png";

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
    name: "johnswyoon@gmail.com",
    image: "",
    url: "mailto:johnswyoon@gmail.com",
  },
];
const gearList = [
  { name: "sony a6000", url: "" },
  { name: "sigma 30mm f/1.4", url: "" },
  { name: "sony 28-70mm f/3.5-5.6", url: "" },
];
const songList = [
  {
    title: "Psychic",
    album: "Breezy",
    artist: "Christ Brown feat. Jack Harlow",
    image:
      "https://images.genius.com/3600e8f28bf7872aa01458bb8928e904.1000x1000x1.jpg",
    url: "https://open.spotify.com/track/64pUytZWfCpeeMBN0XAadF?si=76d9662199a54819",
  },
  {
    title: "Calico",
    album: "Moodswings In To Order",
    artist: "DPR Ian",
    image:
      "https://images.genius.com/fd47398ef1d935e4a3d23d15567c1b10.1000x1000x1.png",
    url: "https://open.spotify.com/track/6rgMOrZmsa3eKZfRSw1587?si=b40bd8e55e8245ad",
  },
  {
    title: "너는 어떻게",
    album: "너는 어떻게",
    artist: "구원찬 feat. 백예린",
    image: "https://i.scdn.co/image/ab67616d00001e02635d8a452f469f726e99bd5e",
    url: "https://open.spotify.com/track/2mVb3RIBLffHQsauvkHBuf?si=47f89cf88faf41e6",
  },
  {
    title: "No Fear No More (Remix)",
    album: "No Fear No More (Remix)",
    artist: "Madeon, EARTHGANG",
    image: "https://i1.sndcdn.com/artworks-RFj6QL0x9mZL-0-t500x500.jpg",
    url: "hhttps://open.spotify.com/track/36X1P3v7N1dv06bh2aPtMF?si=ac515dfbf0644d92",
  },
];

const About = () => {
  return (
    <StyledAbout>
      <SocialColumn>
        <motion.img
          id="profile-pic"
          src={profilepic}
          alt="john yoon profile"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        />
        <h3>connect with me</h3>
        <div id="social">
          <ul>
            {socialList.map((social) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                  key={social.url}
                >
                  <a href={social.url} target="_blank" rel="noreferrer">
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
                <li key={gear.name}>
                  <a
                    src={gear.url}
                    style={{ justifyContent: "center", cursor: "default" }}
                  >
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
            I'm in my 3B term studying Computer Engineering at the University of
            Waterloo.
          </p>
          <p>
            When I'm not doing things related to engineering, you can find me
            taking photos of my friends, attempting to play guitar, or cheering
            for the Toronto Raptors!
          </p>
          <p>
            You may wonder what the <em>"ㅅㅇ"</em> symbols mean on the top left
            of my site! They are the Korean consonants that make up my name,{" "}
            <i>승원</i>. My grandfather had chosen the meaning of my name:{" "}
            <em>勝垣</em> meaning victory and wall. Before you ask... no, I am
            not good at Korean.
          </p>
          <p>I also like to slap on my Sony XM4's and listen to music</p>
        </div>
        <Songs>
          <h3>Currently Listening To</h3>
          <ul>
            {songList.map((song) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                  key={song.title}
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
              );
            })}
          </ul>
        </Songs>
      </TextColumn>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
  h2 {
    /* font-size: 3.5rem; */
    font-size: clamp(40px, 4vw, 3rem);
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
    font-size: 1.15rem;
    line-height: 1.75rem;
    letter-spacing: 1px;
    font-weight: 300;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      margin-top: 3rem;
    }
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding-bottom: 1.5rem;
  }
  p:last-child {
    padding-bottom: 0rem;
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
    border-radius: 5%;
    box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
  }
  li {
    list-style-type: none;
    a {
      display: flex;
      p {
        font-size: 1.25rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
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
