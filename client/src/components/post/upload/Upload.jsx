import React from 'react'

const Upload = () => {
  return (
    <div className="item">
      <h3>
        <b>Jumbo Upload Image:</b>
      </h3>
      <input
        style={{ display: "none" }}
        type="file"
        id="file"
        name=""
        // onChange={(e) => setFile(e.target.files[0])}
      />
      <label className="file" htmlFor="file">
        Upload Image
      </label>
    </div>
  )
}

export default Upload;