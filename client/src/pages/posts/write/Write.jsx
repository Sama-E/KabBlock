import Categories from '../../../components/post/categories/Categories';
import Chat from '../../../components/post/chat/Chat';
import Tags from '../../../components/post/tags/Tags';
// import Upload from '../../../components/post/upload/Upload';
// import Visibility from '../../../components/post/visibility/Visibility';
import './write.scss';

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {

  //Edit state from Single Post
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [tags, setTags] = useState(state?.tags || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`http://localhost:8800/api/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            tags,
            img: file ? imgUrl : "",
          })
        : await axios.post(`http://localhost:8800/api/posts/`, {
            title,
            desc: value,
            cat,
            tags,
            img: file ? imgUrl : "",
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">

        {/* TITLE */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* CHAPTGPT */}
        <Chat />

        {/* EDITOR */}
        <div className="edit">
          <div className="editItem">
            <h4>Post</h4>
          </div>
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>

            {/* VISILIBITY */}
            {/* <Visibility /> */}

            {/* UPLOAD */}
            <div className="item">
              <h3>
                <b>Jumbotron Image Upload:</b>
              </h3>
              <div className="actionFile">
                <label className="selectFile" htmlFor="file">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    name=""
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  Select Image
                </label>
                {/* <div className="uploadFile" onClick={handleClick}>
                  Upload Image
                </div> */}
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="item">
              <h3>Category</h3>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "realestate"}
                  name="cat"
                  value="realestate"
                  id="realestate"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="realestate">Real Estate</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "economics"}
                  name="cat"
                  value="economics"
                  id="economics"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="economics">Economics</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "technology"}
                  name="cat"
                  value="technology"
                  id="technology"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="technology">Technology</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "culture"}
                  name="cat"
                  value="culture"
                  id="culture"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="culture">Culture</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "design"}
                  name="cat"
                  value="design"
                  id="design"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="design">Design</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "food"}
                  name="cat"
                  value="food"
                  id="food"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="food">Food</label>
              </div>
            </div>

            {/* TAGS */}
            {/* <Tags tags = {tags} /> */}
            
          <div className="buttons">
            <label onClick={handleClick}>Publish</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write;