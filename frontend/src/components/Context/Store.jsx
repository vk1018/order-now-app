import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

const StoreContext = createContext({
  food_list: [],
  updateCartCount: () => {},
  selectedCategory: "All",
  updateCategory: () => {},
});
const newFoodList = food_list.map((item) => ({ ...item, cartCount: 0 }));

export const FoodListProvider = ({ children }) => {
  const [foodList, setFoodList] = useState(newFoodList);
  const [category, setCategory] = useState("All");

  const setCartCount = (action) => {
    let newFilteredList;
    console.log(action);
    if (action.type == "add") {
      newFilteredList = foodList.map((item) => {
        if (item._id == action.itemId && item.cartCount >= 0) {
          return { ...item, cartCount: item.cartCount + 1 };
        } else {
          return item;
        }
      });
    } else if (action.type == "remove") {
      newFilteredList = foodList.map((item) => {
        if (item._id == action.itemId && item.cartCount >= 0) {
          return { ...item, cartCount: item.cartCount - 1 };
        } else {
          return item;
        }
      });
    }
    setFoodList(newFilteredList);
  };

  const updateCategory = (catag) => {
    setCategory(catag);
  };
  // console.log(foodList);

  return (
    <StoreContext.Provider
      value={{
        food_list: foodList,
        updateCartCount: setCartCount,
        selectedCategory: category,
        updateCategory,
      }}
    >
      <div className="app">{children}</div>
    </StoreContext.Provider>
  );
};
export default StoreContext;
