import { useState } from "react";
import "./Player.scss";
import { ReactComponent as AlbumIcon } from "../../assets/images/album.svg";
import { ReactComponent as PlayIcon } from "../../assets/images/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/images/pause.svg";
import { ReactComponent as ArrowIconIcon } from "../../assets/images/arrowIcon.svg";
import { ReactComponent as RandomIcon } from "../../assets/images/random.svg";
import { ReactComponent as LoopIcon } from "../../assets/images/loop.svg";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
        <RandomIcon />
        <ArrowIconIcon className="previous" />
        {isPlaying ? (
          <PauseIcon onClick={() => setIsPlaying(false)} />
        ) : (
          <PlayIcon onClick={() => setIsPlaying(true)} />
        )}

        <ArrowIconIcon />
        <LoopIcon />
      </div>
    </div>
  );
};

export default Player;
