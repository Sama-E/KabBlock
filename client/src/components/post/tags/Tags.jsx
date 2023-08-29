
const Tags = () => {
  return (
    <div className="item">
      <h3>
        <b>Tags:</b>
      </h3>
      <div className="tags">
        <input
            type="text"
            placeholder="Tags"
            // onChange={(e) => setTags(e.target.value)}
          />
      </div>
    </div>
  )
}

export default Tags;