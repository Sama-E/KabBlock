import './login.scss';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <form>
      <h1>Login</h1>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          // onChange={handleChange}
        />
        {/* <button onClick={handleSubmit}>Login</button> */}
        <button>Login</button>
        {/* {err && <p>{err}</p>} */}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;