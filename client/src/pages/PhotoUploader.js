import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

// React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
// FilePond Plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

require("dotenv").config();

const PhotoUploader = () => {
  const history = useHistory();
  const [imageDataRaw, setImageDataRaw] = useState("");
  const [data, setData] = useState({
    title: "",
    album: "portraits",
    date: "",
    password: "",
  });
  const { title, album, date, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data, imageDataRaw);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (process.env.REACT_APP_POSTING_PASSWORD === password) {
        const newData = { title, album, date, imageDataRaw };
        const res = await axios.post(
          "http://localhost:3001/api/photos",
          newData
        );
        history.push(`/photography/${album}`);
      } else {
        alert("Wrong Password");
      }
    } catch (error) {
      console.log(error.message);
    }
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
          <label>Album</label>
          <select
            name="album"
            value={album}
            onChange={(e) => onChange(e)}
            required
          >
            <option value="portraits" default>
              Portraits
            </option>
            <option value="street">Street</option>
            <option value="architecture">Architecture</option>
            <option value="automotive">Automotive</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="string"
            onChange={(e) => onChange(e)}
            name="date"
            value={date}
            required
          />
          <small>
            <em>"March 2018"</em>
          </small>
        </div>
        <FilePond
          files={imageDataRaw}
          onupdatefiles={setImageDataRaw}
          name="imageDataRaw"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
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
