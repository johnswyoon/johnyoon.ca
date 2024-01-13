import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dateformat from "dateformat";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await axios.get("/api/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <StyledBlog>
      <h3>Blogaz</h3>
      <StyledPosts>
        {posts.map((post) => {
          return (
            <Link to={`/blog/${post.slug}`}>
              <StyledPost>
                <img src={post.thumbnail} alt={post.thumbbail} />
                <h4>{post.title}</h4>
                <StyledTags>
                  <div className="tag-buttons">
                    {post.tags.map((tag) => {
                      return (
                        <button>
                          <p>{tag}</p>
                        </button>
                      );
                    })}
                  </div>
                  <p className="post-date">
                    {dateformat(post.date, "longDate")}
                  </p>
                </StyledTags>
              </StyledPost>
            </Link>
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
  @media screen and (max-width: 425px) {
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
    margin-bottom: 1rem;
    border-radius: 25px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 425px) {
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
  justify-content: space-between;
  width: 100%;
  button {
    padding: 0.3rem 0.6rem;
    margin: 0rem 0.5rem;
    border-radius: 25%;

    background: #444444;
    border-radius: 40px;
    color: white;
    p {
      background-color: transparent;
    }

    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-decoration: none;
    border: none;
    &:first-child {
      margin-left: 0rem;
    }
  }
  .post-date {
    /* float: right; */
  }
`;

export default Blog;
