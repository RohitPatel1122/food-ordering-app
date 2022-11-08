import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const cartCxt = useContext(CartContext);

  const price = `$${props.data.price.toFixed(2)}`;

  const onAddItemHandler = (amount) => {
    cartCxt.addItem({
      id: props.id,
      name: props.data.name,
      amount: amount,
      price: props.data.price,
    });
  };
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.data.name}</h3>
        <div className={classes.description}>{props.data.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={onAddItemHandler} id={props.id}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
