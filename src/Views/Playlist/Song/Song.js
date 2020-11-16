import "./Song.scss";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like.svg";
import { useState } from "react";

const Song = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={selected ? "song selected" : "song"}
      onClick={() => setSelected(!selected)}
    >
      <LikeIcon />
      <p className="song__title">Enter Sandman</p>
      <p className="song__artist">Metallica</p>
    </div>
  );
};

export default Song;
