import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./MenuItems.css";
// import FilterContext from "../Context/Filter";
import StoreContext from "../Context/Store";

const MenuItems = () => {
  const { food_list, updateCartCount, selectedCategory } =
    useContext(StoreContext);
  // const [itemCount,setItemCount]=useState(0);
  var filteredList;
  if (selectedCategory !== "All") {
    filteredList = food_list.filter(
      (item) => item.category === selectedCategory
    );
  } else {
    filteredList = food_list;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-list">
        {filteredList.map((item, index) => {
          return (
            <div key={index} className="food-list-item">
              <div className="image-container">
                <img src={item.image} />
                {item.cartCount === 0 ? (
                  <img
                    src={assets.add_icon_white}
                    onClick={() =>
                      updateCartCount({ type: "add", itemId: item._id })
                    }
                    alt="add icon"
                  />
                ) : (
                  <div className="count-container">
                    <img
                      src={assets.remove_icon_red}
                      onClick={() =>
                        updateCartCount({ type: "remove", itemId: item._id })
                      }
                      alt="remove icon"
                    />
                    <p>{item.cartCount}</p>
                    <img
                      src={assets.add_icon_green}
                      onClick={() =>
                        updateCartCount({ type: "add", itemId: item._id })
                      }
                      alt="add icon"
                    />
                  </div>
                )}
              </div>
              <div className="food-info">
                <div className="name-rating">
                  <p>{item.name}</p>
                  <img src={assets.rating_starts} alt="" />
                </div>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
