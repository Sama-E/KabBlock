import React from 'react';

const Visibility = () => {
  return (
      <div className="item">
        <h3>
          <b>Visibility:</b>
        </h3>
        <div className="visibility">
          <input
            type="radio"
            // checked={visibility === "public"}
            name="cat"
            value="public"
            id="public"
            // onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="public">Public</label>
        </div>
        <div className="visibility">
          <input
            type="radio"
            // checked={visibility === "private"}
            name="cat"
            value="private"
            id="private"
            // onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="private">Private</label>
        </div>        
      </div>
  )
}

export default Visibility