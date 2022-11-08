import { useState } from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountFormIsValid, setAmountFormIsValid] = useState(true);
  const submitItemHandler = (event) => {
    event.preventDefault();
    const enteredAmountValue = amountInputRef.current.value;
    const enteredAmountAsNumber = +enteredAmountValue;
    if (
      enteredAmountValue.trim().length === 0 ||
      enteredAmountAsNumber < 1 ||
      enteredAmountAsNumber > 5
    ) {
      setAmountFormIsValid(false);
      return;
    }
    props.onAddItem(enteredAmountAsNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitItemHandler}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          type: "number",
          id: `amount_` + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button> + Add</button>
      {!amountFormIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
