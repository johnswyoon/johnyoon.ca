import React, { useState } from "react";
import { Link } from "react-router-dom";
//Style and Animation
import styled from "styled-components";

const Nav = () => {
  const [isToggled, setIsToggled] = useState(true);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <Navigation>
      <Link to="/">
        <h1>john yoon</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photography">Photography</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div class="toggle-button" onClick={toggleHandler}>
        <Link to="/menu">
          <span></span>
          <span></span>
        </Link>
      </div>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10rem 1rem 10rem;
  width: 100%;
  ul {
    display: flex;
    list-style: none;
    float: right;
    li {
      padding: 0rem 1.25rem;
      a {
        font-size: 1rem;
        font-weight: 700;
        color: rgb(105, 105, 105);
      }
    }
    .toggle-button {
      display: block;
    }
  }
  @media (max-width: 1024px) {
    padding: 2rem 5rem 1rem 5rem;
    ul {
      display: none;
    }
    .toggle-button {
      display: block;
      span {
        height: 3px;
        width: 30px;
        margin: 6px;
        display: block;
        background: #333;
      }
    }
  }
`;

export default Nav;
