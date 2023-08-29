import './register.scss';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
    <form>
    <h1>Register</h1>
      <input
        required
        type="text"
        placeholder="username"
        name="username"
        // onChange={handleChange}
      />
      <input
        required
        type="email"
        placeholder="email"
        name="email"
        // onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
        // onChange={handleChange}
      />
      {/* <button onClick={handleSubmit}>Register</button> */}
      <button>Register</button>
      {/* {err && <p>{err}</p>} */}
      <span>
        Do you have an account? <Link to="/login">Login</Link>
      </span>
    </form>
  </div>
  )
}

export default Register