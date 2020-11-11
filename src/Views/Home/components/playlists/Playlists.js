import { useState } from "react";
import "./Playlists.scss";
import PlaylistItem from "./Playlist/Playlist";

const playlistsData = [
  {
    id: "a",
    title: "Heavy",
    songs: ["Enter Sandman", "Psychosocial", "B.Y.O.B"],
  },
  {
    id: "b",
    title: "Clasicos",
    songs: ["Mozart", "Beethoven", "Debussy"],
  },
  {
    id: "c",
    title: "Old Days",
    songs: ["Frank", "Queen"],
  },
  {
    id: "e",
    title: "Nostalgia",
    songs: ["El Dorado", "Planeta del Tesoro", "Hercules"],
  },
];

const Playlists = () => {
  const [playlists] = useState(playlistsData);

  return (
    <div className="playlists">
      <div className="playlists__container">
        {playlists.map((playlist) => {
          return <PlaylistItem key={playlist.id} {...playlist} />;
        })}
      </div>
    </div>
  );
};

export default Playlists;
