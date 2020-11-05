import { useState } from "react";
import "./Login.scss";
import { ReactComponent as SpotifyIcon } from "../../assets/images/spotify.svg";
import { auth } from "../../config/fbConfig";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [message, setMessage] = useState("");

  const checkError = () => {
    let isValid;

    if (email !== "test@test.com" && password !== "Test123") {
      setError(true);
      setMessage(
        "Please enter 'test@test.com' for email and 'Test123' for Password"
      );
      isValid = false;
      return isValid;
    } else if (email !== "test@test.com") {
      setError(true);
      setMessage("Please enter 'test@test.com' for Email");
      isValid = false;
      return isValid;
    } else if (password !== "Test123") {
      setError(true);
      setMessage("Please enter 'Test123' for Password");
      isValid = false;
      return isValid;
    }

    setError(false);
    isValid = true;
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkError();
    console.log(isValid);

    isValid &&
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            console.log(auth);
            // dispatch auth action set isLoggedIn to true
            dispatch(loginAction(isValid));
          }
        })
        .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <SpotifyIcon />
        <span>
          Spotify <small>clone</small>
        </span>
      </div>

      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form--field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="test@test.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__form--field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Test123"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login__btn">LOGIN</button>

        {isError && <p className="login__error-msg">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
