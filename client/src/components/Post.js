import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import dateformat from "dateformat";

const Post = (props) => {
  const [post, setPost] = useState({});

  const getPost = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/posts/${props.match.params.slug}`
    );
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <StyledPost>
      <img id="thumbnail" src={post.thumbnail} />
      <h2>{post.title}</h2>
      <p>{dateformat(post.date, "longDate")}</p>
      <ReactMarkdownWithHtml children={post.text} allowDangerousHtml />
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #thumbnail {
  }
  img {
    width: 600px;
    height: 400px;
    object-fit: cover;
  }
`;

export default Post;
