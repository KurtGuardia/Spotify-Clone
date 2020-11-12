import "./Playlists.scss";
import PlaylistItem from "./Playlist/Playlist";
import Spinner from "../../../../Components/UI/Spinner/Spinner";
import useFirestore from "../../../../hooks/useFirestore";
import { useEffect, useState } from "react";

const Playlists = () => {
  const { playlists } = useFirestore("playlists");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading((prevIsLoading) => !prevIsLoading);
  }, [playlists]);

  return (
    <div className="playlists">
      <div className="playlists__container">
        {!isLoading && <Spinner />}
        {playlists.map((playlist) => {
          return <PlaylistItem key={playlist.id} {...playlist} />;
        })}
      </div>
    </div>
  );
};

export default Playlists;
