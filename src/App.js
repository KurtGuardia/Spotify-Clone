import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Login,
  Home,
  Favorites,
  User,
  NotFound,
  Playlist,
} from "./Views/Index";
import Player from "./Components/Player/Player";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import Modal from "./Components/UI/Modal/Modal";

const modalData =
  "Spotify Clone, was a project developed by Kurt Guardia and Oliver Castro, it is a no profit project. Built with ReactJS, Redux, SASS and Firebase. This is a functional app, in which the user can navigate around different playlists, you can save your favorite songs by liking them clicking on the heart, and they will be displayed on the Favorites tab. Activate the loop functionality to repeat the playlist when it finishes, or the random functionality after each song. You may also create a fake account, to authenticate with that user and password. It is not a 100% functional, you may not be able to use the Search bar, as it doesn't have functionality, of use the sidebar to chose a playlist nor play the song while in the favorites tab, all this could have been done, but with all the functionalities that it has now shows the knowldge we are trying to show on ReactJs, Redux, SaaS, Firebase and responsive design";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isOpen = useSelector((state) => state.info.isOpen);
  const playlistIndex = useSelector(
    (state) => state.music.current.playlistIndex
  );
  const currentPlaylist = useSelector(
    (state) => state.music.playlists[playlistIndex]
  );

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Player currentPlaylist={currentPlaylist} />
        <Modal title="Spotify Clone Info" content={modalData} show={isOpen} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/user" component={User} />
          <Route path="/playlist/:id" component={Playlist} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//1ed760 claro
//1db954 oscuro
//191414
// Desktop: 1200px
// Medium: 1024ps
// small: 768
// phone: 480
// landscape
