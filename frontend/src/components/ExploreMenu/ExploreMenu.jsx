import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useContext } from "react";
import StoreContext from "../Context/Store";

const ExploreMenu = () => {
  //   const { updateFilteredList, filteredList } = useContext(FilterContext);
  const { selectedCategory, updateCategory } = useContext(StoreContext);
  //   console.log(food_list[0].cartCount, filteredList[0].cartCount);
  console.log(selectedCategory);

  const handleEvent = (item) => {
    updateCategory(item.menu_name);
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p>
        Choose from the diverse menu featuring a delectable array of dishes
        crafted with the finest ingridents and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience,one
        delecious meal at a time.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="menu-list-item"
              onClick={() => handleEvent(item)}
            >
              <img
                src={item.menu_image}
                alt="menuimage"
                className={selectedCategory === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
