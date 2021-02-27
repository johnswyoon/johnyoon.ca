import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import dateformat from "dateformat";

const Post = (props) => {
  const [post, setPost] = useState({});

  const getPost = async () => {
    const res = await axios.get(`/api/posts/${props.match.params.slug}`);
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <StyledPost>
      <img id="thumbnail" src={post.thumbnail} />
      <h2 id="title">{post.title}</h2>
      <p id="date">{dateformat(post.date, "longDate")}</p>
      <ReactMarkdownWithHtml children={post.text} allowDangerousHtml />
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  //Padding
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

  img {
    width: 600px;
    object-fit: cover;
  }
  @media screen and (max-width: 670px) {
    img {
      width: 450px;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 350px;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 300px;
    }
  }

  #title {
    padding: 1rem 0rem 0rem 0rem;
  }
  #date {
    padding-bottom: 3rem;
  }

  h2 {
    font-size: clamp(40px, 2vw, 2rem);
  }
  h3 {
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    font-weight: 700;
  }
  p,
  li {
    font-size: 1.15rem;
    line-height: 1.75rem;
  }

  p,
  ul {
    padding: 1rem 0rem;
  }
`;

export default Post;
