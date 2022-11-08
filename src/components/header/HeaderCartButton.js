import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useState } from "react";
import { useEffect } from "react";
const HeaderCartButton = (props) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartCxt = useContext(CartContext);
  const { items } = cartCxt;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    //reset to allow hightlight on every adding
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    //clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const noOfItems = cartCxt.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
