import './navbar.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="container">
      <div className="logo">
        <Link className="link" to="/">
        {/* <img src={Logo} alt="" /> */}
        <h2> the KAB [Block] </h2>
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/?cat=realestate">
          <h6>REAL ESTATE</h6>
        </Link>
        <Link className="link" to="/?cat=economics">
          <h6>ECONOMICS</h6>
        </Link>
        <Link className="link" to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="link" to="/?cat=culture">
          <h6>CULTURE</h6>
        </Link>
        <Link className="link" to="/?cat=design">
          <h6>DESIGN</h6>
        </Link>
        <Link className="link" to="/?cat=food">
          <h6>FOOD</h6>
        </Link>
        <span>USERNAME</span>
        {/* <span>{currentUser?.username}</span>
        {currentUser ? (
          <span onClick={logout}>Logout</span> */}       
          <span>LOGOUT</span>
        {/* ) : ( */}
          <Link className="link" to="/login">
            Login
          </Link>
        {/* )} */}
        <span className="write">
          <Link className="link" to="/write">
            Write
          </Link>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Navbar;