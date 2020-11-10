import "./Home.scss";
import { Banner, Header, Playlists } from "./components/index";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Playlists />
    </div>
  );
};

export default Home;
