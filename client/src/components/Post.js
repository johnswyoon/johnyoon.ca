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
      <StyledMarkdown>
        <ReactMarkdownWithHtml
          id="markdown"
          children={post.text}
          allowDangerousHtml
        />
      </StyledMarkdown>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 750px;
  margin: 1rem auto 3rem auto;

  //Padding
  @media screen and (max-width: 900px) {
    padding: 1rem clamp(2rem, 3vw, 50rem);
  }

  img {
    width: 600px;
    object-fit: cover;
    align-items: center;
    display: block;
  }
  @media screen and (max-width: 670px) {
    img {
      width: 100%;
      /* width: 450px; */
    }
  }
  @media screen and (max-width: 500px) {
    img {
      /* width: 350px; */
    }
  }
  @media screen and (max-width: 425px) {
    img {
      /* width: 300px; */
    }
  }

  #thumbnail {
    margin-bottom: 1.5rem;
  }

  #date {
    padding-bottom: 1rem;
  }

  h2 {
    font-size: clamp(40px, 2vw, 2rem);
    text-align: center;
  }
  h3 {
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    font-weight: 700;
  }

  p,
  li {
    font-size: 1.15rem;
    font-weight: 300;
    /* line-height: 1.75rem; */
    line-height: 2.25rem;
    font-family: "Nunito Sans";
  }

  p,
  ul {
    padding: 1rem 0rem;
  }

  a {
    color: #3963c4;
  }

  hr {
    width: 100%;
    margin: 1rem;
  }
`;

const StyledMarkdown = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

export default Post;
