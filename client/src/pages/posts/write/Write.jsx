import Categories from '../../../components/post/categories/Categories';
import Chat from '../../../components/post/chat/Chat';
import Tags from '../../../components/post/tags/Tags';
import Upload from '../../../components/post/upload/Upload';
import Visibility from '../../../components/post/visibility/Visibility';
import './write.scss';

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [tags, setTags] = useState(state?.tags || "");

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Chat />

        <div className="edit">
          <div className="editItem">
            <h4>Post</h4>
            <div className="buttonEdit">
              Add Heading
            </div>
            <div className="buttonEdit">
              Add Box Image
            </div>
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
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
            <Visibility />
            <Upload />
            <Categories />
            <Tags />
          <div className="buttons">
            {/* <button onClick={handleClick}>Publish</button> */}
            Publish
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write;