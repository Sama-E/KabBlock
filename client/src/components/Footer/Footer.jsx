import './footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* <img src={Logo} alt="" /> */}
      <Link className="link" to="/">
        {/* <img src={Logo} alt="" /> */}
        <h2> the KAB [Block] </h2>
      </Link>
      <span>
      <span>© .KAB International Ltd. 2023</span>
      </span>
  </footer>
  )
}

export default Footer;