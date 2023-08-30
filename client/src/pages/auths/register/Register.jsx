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
        placeholder="First Name"
        name="firstName"
        // onChange={handleChange}
      />
      <input
        required
        type="text"
        placeholder="Last Name"
        name="lastName"
        // onChange={handleChange}
      />
      <input
        required
        type="email"
        placeholder="Email"
        name="email"
        // onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="Password"
        name="password"
        // onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
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