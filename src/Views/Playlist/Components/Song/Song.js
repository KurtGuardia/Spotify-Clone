import "./Song.scss";
import { ReactComponent as LikeIcon } from "../../../../assets/icons/like.svg";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../../../../store/actions/musicActions";

const Song = ({ title, artist, songIndex, index }) => {
  const dispatch = useDispatch();

  const selectSong = () => {
    dispatch(setCurrentSong(index));
  };

  return (
    <div
      className={index === songIndex ? "song selected" : "song"}
      onClick={selectSong}
    >
      <LikeIcon />
      <p className="song__title">{title}</p>
      <p className="song__artist">{artist}</p>
    </div>
  );
};

export default Song;
