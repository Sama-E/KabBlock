import './register.scss';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
    <form>
    <h1>Register</h1>
      <input
        required
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        required
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />
      <input
        required
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Register</button>
      {err && <p>{err}</p>}
      <span>
        Do you have an account? <Link to="/login">Login</Link>
      </span>
    </form>
  </div>
  )
}

export default Register