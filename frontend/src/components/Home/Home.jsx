import Download from "../AppDownload/Download";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuItems from "../MenuItems/MenuItems";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <MenuItems />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
