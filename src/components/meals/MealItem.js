import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.data.price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.data.name}</h3>
        <div className={classes.description}>{props.data.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
