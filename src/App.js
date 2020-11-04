import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Favorites, User, NotFound } from "./Views/Index";
import Player from "./Components/Player/Player";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Player />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//1ed760
//1db954
//191414
