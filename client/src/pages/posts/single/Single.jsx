import './single.scss';
import Delete from '/src/assets/images/delete.png';
import Edit from '/src/assets/images/edit.png';
import Menu from '../../../components/menu/Menu';
import { Link, useLocation } from "react-router-dom";

const Single = () => {
  const post = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      userImg: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      username: "Kaizen Kab"
    },
  ]

  return (
    <div className="single">
    <div className="content">
      {/* <img src={`../upload/${post?.img}`} alt="" /> */}
      <img src={post.img} alt="" />
      <div className="user">
        {/* {post.userImg && <img
          src={post.userImg}
          alt=""
        />} */}
        <img
          src={post.userImg}
          alt=""
        />
        <div className="info">
          <span>{post.username}</span>
          {/* <p>Posted {moment(post.date).fromNow()}</p> */}
          <p>Posted {post.date}</p>
        </div>
        {/* {currentUser.username === post.username && ( */}
          <div className="edit">
            {/* <Link to={`/write?edit=2`} state={post}> */}
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            {/* <img onClick={handleDelete} src={Delete} alt="" /> */}
            <img src={Delete} alt="" />
          </div>
        {/* )} */}
      </div>
      <h1>{post.title}</h1>
      {/* <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.desc),
        }}
      > */}
      <p>
        {post.desc}
      </p>      
    </div>
    <Menu cat={post.cat}/>
  </div>
  )
}

export default Single;