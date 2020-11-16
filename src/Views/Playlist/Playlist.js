import "./Playlist.scss";
import Header from "../Home/components/header/Header";
import Song from "./Song/Song";

const Playlist = () => {
  return (
    <div className="playlist-container">
      <Header />
      <div className="playlist-container__table">
        <div className="playlist-container__title">
          <p>Title</p>
          <p>Artist</p>
        </div>
        <div className="playlist-container__songs">
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
