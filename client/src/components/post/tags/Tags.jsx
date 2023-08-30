import React, { useState } from "react";

const Tags = (tags) => {
  const [tag, setTag] = useState("");

  return (
    <div className="item">
      <h3>
        <b>Tags:</b>
      </h3>
      <div className="tags">
        <input
          type="text"
          placeholder="Tags"
          value={tags.tags}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Tags;