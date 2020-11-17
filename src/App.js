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

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const playlistIndex = useSelector(
    (state) => state.music.current.playlistIndex
  );
  const currentPlaylist = useSelector((state) => state.music.playlists[1]);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Player currentPlaylist={currentPlaylist} />
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
