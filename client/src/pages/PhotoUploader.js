import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

require("dotenv").config();

const PhotoUploader = () => {
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
  };

  return (
    <StyledPhotoUploader>
      <h2>Photo Uploader</h2>
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
          <label>Collection</label>
          <select name="collection" required>
            <option value="portraits">Portraits</option>
            <option value="street">Street</option>
            <option value="architecture">Architecture</option>
            <option value="automotive">Automotive</option>
          </select>
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
    </StyledPhotoUploader>
  );
};

const StyledPhotoUploader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  .form-group {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
`;

export default PhotoUploader;
