import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCxt = useContext(CartContext);
  const noOfItems = cartCxt.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
