

const Categories = () => {
  return (
    <div className="item">
      <h3>Category</h3>
      <div className="cat">
        <input
          type="radio"
          // checked={cat === "realestate"}
          name="cat"
          value="realestate"
          id="realestate"
          // onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="realestate">Real Estate</label>
      </div>
      <div className="cat">
        <input
          type="radio"
          // checked={cat === "economics"}
          name="cat"
          value="economics"
          id="economics"
          // onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="economics">Economics</label>
      </div>
      <div className="cat">
        <input
          type="radio"
          // checked={cat === "technology"}
          name="cat"
          value="technology"
          id="technology"
          // onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="technology">Technology</label>
      </div>
      <div className="cat">
        <input
          type="radio"
          // checked={cat === "culture"}
          name="cat"
          value="culture"
          id="culture"
          // onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="culture">Culture</label>
      </div>
      <div className="cat">
        <input
          type="radio"
          // checked={cat === "design"}
          name="cat"
          value="design"
          id="design"
          // onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="design">Design</label>
      </div>
      <div className="cat">
        <input
          type="radio"
          // checked={cat === "food"}
          name="cat"
          value="food"
          id="food"
          // onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="food">Food</label>
      </div>
    </div>
  )
}

export default Categories;