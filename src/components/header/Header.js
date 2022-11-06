import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import bannerImage from "../../assets/banner.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
