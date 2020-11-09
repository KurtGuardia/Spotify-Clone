import { useCallback, useEffect, useState } from "react";
import "./Player.scss";
import { ReactComponent as AlbumIcon } from "../../assets/images/album.svg";
import { ReactComponent as PlayIcon } from "../../assets/images/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/images/pause.svg";
import { ReactComponent as ArrowIconIcon } from "../../assets/images/arrowIcon.svg";
import { ReactComponent as RandomIcon } from "../../assets/images/random.svg";
import { ReactComponent as LoopIcon } from "../../assets/images/loop.svg";
import sound1 from "../../assets/music/heavy/Metallica-Enter-Sandman.mp3";
import sound2 from "../../assets/music/heavy/Slipknot-Psychosocial.mp3";
import sound3 from "../../assets/music/heavy/System-of-a-Down-B.Y.O.B..mp3";
import sound from "../../assets/music/heavy/1.mp3";

const song = new Audio(sound);
const song1 = new Audio(sound1);
const song2 = new Audio(sound2);
const song3 = new Audio(sound3);

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist] = useState([song, song1, song2, song3]);
  const [songIndex, setSongIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(true);
  const [isRandom, setIsRandom] = useState(false);

  const playSong = useCallback(() => {
    setIsPlaying(true);

    let playPromise = playlist[songIndex].play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // isLooping && setIsPlaying(true);
          setIsPlaying(true);
          console.log("autoplay");
        })
        .catch((error) => {
          console.log("playback prevented");
          setIsPlaying(false);
        });
    }
  }, [playlist, songIndex]);

  const pauseSong = useCallback(() => {
    setIsPlaying(false);
    playlist[songIndex].pause();
  }, [playlist, songIndex]);

  const prevSong = () => {
    pauseSong();

    setSongIndex((prevSongIndex) => {
      if (prevSongIndex <= 0) {
        return (prevSongIndex = playlist.length - 1);
      }
      return prevSongIndex - 1;
    });
  };

  const nextSong = useCallback(() => {
    pauseSong();

    setSongIndex((prevSongIndex) => {
      if (prevSongIndex >= playlist.length - 1) {
        return (prevSongIndex = 0);
      }
      return prevSongIndex + 1;
    });
  }, [pauseSong, playlist.length, isLooping]);

  useEffect(() => {
    playSong();
  }, [songIndex, playSong]);

  useEffect(() => {
    if (isLooping) {
      playlist[songIndex].addEventListener("ended", nextSong);
    } else if (!isLooping) {
      playlist[songIndex].addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
    return () => {
      playlist[songIndex].removeEventListener("ended", nextSong);
      playlist[songIndex].removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, [playlist, isLooping, songIndex, nextSong]);

  useEffect(() => {
    setIsPlaying(false);
  }, []);

  return (
    <div className="player">
      <div className="player__album">
        <div className="player__album--img">
          <AlbumIcon />
        </div>

        <div className="player__album--data">
          <p className="player__album--title">Title</p>
          <p className="player__album--artist">Artist</p>
        </div>
      </div>

      <div className="player__progress">
        <p>2:30</p>
        <div className="player__progress--container">
          <div className="player__progress--bar"></div>
        </div>
        <p>3:30</p>
      </div>

      <div className="player__controls">
        <RandomIcon
          className={isRandom ? "random" : ""}
          onClick={() => setIsRandom(!isRandom)}
        />
        {isRandom && <div className="dotr"></div>}
        <ArrowIconIcon className="previous" onClick={prevSong} />
        {isPlaying ? (
          <PauseIcon onClick={pauseSong} />
        ) : (
          <PlayIcon className="play-pause-btn" onClick={playSong} />
        )}
        <ArrowIconIcon onClick={nextSong} />
        <LoopIcon
          onClick={() => setIsLooping(!isLooping)}
          className={isLooping ? "loop" : ""}
        />{" "}
        {isLooping && <div className="dotl"></div>}
      </div>
    </div>
  );
};

export default Player;
