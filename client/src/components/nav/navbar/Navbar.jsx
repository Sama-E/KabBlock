import './navbar.scss';
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from '/src/context/authContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
    <div className="container">
      <div className="logo">
        <Link className="link" to="/">
        <h2> the KAB [Block] </h2>
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/?cat=RealEstate">
          <h6>REAL ESTATE</h6>
        </Link>
        <Link className="link" to="/?cat=Economics">
          <h6>ECONOMICS</h6>
        </Link>
        <Link className="link" to="/?cat=Technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="link" to="/?cat=Culture">
          <h6>CULTURE</h6>
        </Link>
        <Link className="link" to="/?cat=Design">
          <h6>DESIGN</h6>
        </Link>
        <Link className="link" to="/?cat=Food">
          <h6>FOOD</h6>
        </Link>
        
        {currentUser ? (
          <>
          <span className="userName">[ {currentUser?.firstName} ]</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
          <span className="logout">
            <span onClick={logout}>Logout</span>
          </span>              
          </>
        ) : ( 
          <Link className="link" to="/login">
            LOGIN
          </Link>
        )} 
      </div>
    </div>
  </div>
  )
}

export default Navbar;