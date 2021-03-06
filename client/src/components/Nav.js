import React from "react";
import { Link } from "react-router-dom";
//  Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { menuAnimation } from "../styles/animations";

const navElements = [
  { title: "home", url: "/" },
  { title: "photography", url: "/photography" },
  { title: "blog", url: "/blog" },
  { title: "about", url: "/about" },
];

const Nav = ({ isToggled, toggleHandler }) => {
  return (
    <div>
      <Navigation>
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            ㅅㅇ
          </motion.h1>
        </Link>
        <ul>
          {navElements.map((menu) => {
            return (
              <motion.li
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                key={menu.title}
              >
                <Link to={menu.url}>{menu.title}</Link>
              </motion.li>
            );
          })}
        </ul>
        <div className="toggle-button" onClick={toggleHandler}>
          <button className={`burger ${isToggled ? "active" : ""}`}></button>
        </div>
      </Navigation>
      <FullNav
        style={{ display: isToggled ? "grid" : "none" }}
        variants={menuAnimation}
        initial="initial"
        animate={isToggled ? "animate" : ""}
        exit="exit"
      >
        <div>
          <ul>
            {navElements.map((menu) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                  key={menu.title}
                  onClick={toggleHandler}
                >
                  <Link to={menu.url}>
                    <h3>{menu.title}</h3>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </FullNav>
    </div>
  );
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 3rem 10rem 1rem 10rem; */
  padding: 0 clamp(1rem, 10%, 500px);
  width: 100%;
  min-height: 10vh;
  h1 {
    font-size: 1.75rem;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0rem 1.25rem;
      a {
        font-size: 1rem;
        font-weight: 700;
        color: #5e5e5e;
      }
    }
  }
  .toggle-button {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    ul {
      display: none;
      position: relative;
    }
    .toggle-button {
      display: block;
    }
  }
`;

const FullNav = styled(motion.div)`
  /* display: none; */
  place-content: center;
  z-index: 10;
  min-height: 80vh;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    li {
      padding: 0.5rem;
      h3 {
        font-size: clamp(1.5rem, 10vw, 2.5rem);
        font-weight: 700;
        color: #5e5e5e;
      }
    }
  }
`;

export default Nav;
