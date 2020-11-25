import { Link } from "react-router-dom";
import { ErrorIcon } from "../../assets/images";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404 Error: Page Not Found</h1>
      <ErrorIcon />
      <p>Did you get lost my friend...?</p>
      <Link to="/" className="notFound__btn">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
