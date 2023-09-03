import './single.scss';
import Delete from '/src/assets/images/delete.png';
import Edit from '/src/assets/images/edit.png';
import Menu from '../../../components/nav/menu/Menu';

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "/src/context/AuthContext";
import DOMPurify from "dompurify";

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../uploads/${post?.img}`} alt="" />
        {/* <img src={post.img} alt="" /> */}
        <div className="user">
          {post.profilePic && <img
            src={post.profilePic}
            alt=""
          />}
          <div className="info">
            <span>{post.firstName} {post.lastName}</span>
            <p>Posted {moment(post.created_at).fromNow()}</p>
            {/* <p>Posted {post.date}</p> */}
          </div>
          {currentUser?.id === post.userId && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
              {/* <Link to={`/write?edit=2`}> */}
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
          <h1>{post.title}</h1>
        <div className="heading">
          <h3>Category: </h3><button>{post.cat}</button>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        >
        </p>      
      </div>
    <Menu cat={post.cat}/>
  </div>
  )
}

export default Single;