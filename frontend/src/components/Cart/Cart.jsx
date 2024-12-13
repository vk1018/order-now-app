import { useContext } from "react";
import StoreContext from "../Context/Store";
import "./Cart.css";
import { assets } from "../../assets/assets";
// import { assets } from "../../assets/assets";

const Cart = () => {
  const { food_list, updateCartCount } = useContext(StoreContext);

  const CartItem = ({ item }) => {
    return (
      <>
        <img src={item.image} alt="" height={80} width={120} />
        <p>{item.name}</p>
        <p>$ {item.price}</p>
        <p className="cart-count-action">
          <img
            src={assets.add_icon_green}
            alt="addicon"
            height={25}
            width={25}
            onClick={() => updateCartCount({ type: "add", itemId: item._id })}
          />{" "}
          {item.cartCount}{" "}
          <img
            src={assets.remove_icon_red}
            height={25}
            width={25}
            alt="removeicon"
            onClick={() =>
              updateCartCount({ type: "remove", itemId: item._id })
            }
          />
        </p>
        <p>$ {item.price * item.cartCount}</p>
        <hr />
      </>
    );
  };
  return (
    <div className="cart">
      <div className="placeholder-img">
        <img src="/cart.webp" alt="" className="" />
      </div>

      <div className="cart-items-title cart-items">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qunatity</p>
        <p>Total</p>
        <hr />

        {food_list.map((item, index) => {
          if (item.cartCount > 0) {
            return <CartItem item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};
export default Cart;
