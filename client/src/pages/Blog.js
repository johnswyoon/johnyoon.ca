import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const postsArray = await axios.get("http://localhost:3001/api/posts");
    setPosts(postsArray.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <StyledBlog>
      <h3>blog ting</h3>
      <StyledPosts>
        {posts.map((post) => {
          return (
            <StyledPost>
              <img src={post.thumbnail} alt={post.thumbbail} />
              <h4>{post.title}</h4>
              <StyledTags>
                {post.tag.map((tagElement) => {
                  return <button>{tagElement}</button>;
                })}
              </StyledTags>
            </StyledPost>
          );
        })}
      </StyledPosts>
    </StyledBlog>
  );
};

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 5rem 2rem;
  h3 {
    text-align: center;
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: 700;
    letter-spacing: 2px;
    padding: 1rem 0rem 3rem 0rem;
  }
  h4 {
    font-size: clamp(1.5rem, 5vw, 1.75rem);
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
`;

const StyledPosts = styled.div`
  display: grid;
  justify-content: center;
  gap: 3rem;
  //max 3 columns when above 1600px, auto if less
  grid-template-columns: repeat(auto-fill, 400px);
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(3, 400px);
  }
  // image size changes when on mobile (<600px)
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    padding-bottom: 1rem;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    img {
      width: 300px;
      height: 225px;
    }
  }
`;

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  button {
    padding: 0.25rem;
    margin: 0rem 0.5rem;
    &:first-child {
      margin-left: 0rem;
    }
  }
`;

export default Blog;
