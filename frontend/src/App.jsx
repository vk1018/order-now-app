import { FoodListProvider } from "./components/Context/Store";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  console.log("app rendered");
  return (
    <FoodListProvider>
      <Navbar />
      <Outlet />
    </FoodListProvider>
  );
};
export default App;
