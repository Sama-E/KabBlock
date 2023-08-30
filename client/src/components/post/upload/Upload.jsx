import React, { useState } from "react";
import axios from "axios";

const Upload = () => {

  const [file, setFile] = useState(null);

  // const upload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     const res = await axios.post("/upload", formData);
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("http://localhost:8800/api/upload", formData)
      console.log(res.data);
    } catch (err) {
      return res.data;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = upload();
  }


  return (
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
        <div className="uploadFile" onClick={handleClick}>
          Upload Image
        </div>
      </div>
    </div>
  )
}

export default Upload;