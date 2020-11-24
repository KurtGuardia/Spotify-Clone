import "./User.scss";
import { UserIcon } from "../../assets/icons/index";
import { useSelector } from "react-redux";
import { Header } from "../Home/components/index";

const User = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="user">
      <Header />
      <h1>
        User: <span>{user.email}</span>
      </h1>
      <div className="user__logo">
        <UserIcon />
      </div>
      <p>UID: {user.uid}</p>
    </div>
  );
};

export default User;
