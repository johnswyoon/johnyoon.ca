import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

require("dotenv").config();

const PostEditor = () => {
  const history = useHistory();
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    tags: [],
    text: "",
    password: "",
  });
  const { title, thumbnail, tags, text, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (process.env.REACT_APP_POSTING_PASSWORD === password) {
        const newData = { title, thumbnail, tags, text };
        const res = await axios.post(
          "http://localhost:3001/api/posts",
          newData
        );
        history.push("/blog");
      } else {
        alert("Wrong Password");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledPostEditor>
      <h2>Blog Post</h2>
      <StyledForm onSubmit={submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="title"
            value={title}
            required
          />
        </div>
        <div className="form-group">
          <label>Thumbnail</label>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="thumbnail"
            value={thumbnail}
            required
          />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="tags"
            value={tags}
            required
          />
          <small>seperate with commas</small>
        </div>
        <div className="form-group">
          <label>Text</label>
          <textarea
            rows="20"
            cols="80"
            onChange={(e) => onChange(e)}
            name="text"
            value={text}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => onChange(e)}
            name="password"
            value={password}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" />
        </div>
      </StyledForm>
    </StyledPostEditor>
  );
};

const StyledPostEditor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  /* display: flex; */
  /* flex-direction: column; */
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
`;

export default PostEditor;
