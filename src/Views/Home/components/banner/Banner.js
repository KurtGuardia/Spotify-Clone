import "./Banner.scss";
import { ReactComponent as Band } from "../../../../assets/icons/Group.svg";

const Banner = () => {
  const year = new Date().getFullYear();
  const day = new Date().getDate();
  const month = new Date().getMonth();

  const formatMonth = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  };

  const date = `${formatMonth(month)} the ${day}th of ${year}`;

  return (
    <div className="banner">
      <div className="banner__left">
        <h2 className="banner__title">Welcome Kurt</h2>
        <p className="banner__date">{date}</p>
        <p className="banner__msg">Play any playlists you want</p>
      </div>
      <div className="banner__right">
        <Band />
      </div>
    </div>
  );
};

export default Banner;
