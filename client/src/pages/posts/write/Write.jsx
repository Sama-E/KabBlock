import Categories from '../../../components/post/categories/Categories';
import Upload from '../../../components/post/upload/Upload';
import Visibility from '../../../components/post/visibility/Visibility';
import './write.scss';

const Write = () => {
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          // onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          {/* <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          /> */}
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
            <Visibility />
            <Upload />
            <Categories />
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