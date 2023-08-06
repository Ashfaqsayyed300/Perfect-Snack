import classes from "./style.module.css";

import MealItem from "./MealItem/MealItem";

const Meals = (props) => {
  return props.isLaoding ? (
    <div>Loading...</div>
  ) : (
    <div id="meals" >
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/homepage">All</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Pizza
          </li>
        </ol>
      </nav>

      <div className={classes.card}>
        {props.meal.map((item) => (
          <MealItem
            id={item.id}
            img={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
      <hr class="hr" />
    </div>
  );
};

export default Meals;
