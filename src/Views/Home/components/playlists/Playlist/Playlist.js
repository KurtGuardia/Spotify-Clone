import "./Playlist.scss";
import { ReactComponent as AlbumIcon } from "../../../../../assets/icons/album.svg";

const Playlist = ({ title, songs }) => {
  return (
    <div className="playlistItem">
      <div className="playlistItem--left">
        <AlbumIcon />
      </div>
      <div className="playlistItem--right">
        <h2>{title}</h2>
        <p>{songs.length} songs</p>
      </div>
    </div>
  );
};

export default Playlist;
