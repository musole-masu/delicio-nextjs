import MealItem from "./MealItem";

const MealList = (props) => {
  return props.meals.map((meal) => <MealItem meal={meal} key={meal.id} />);
};
export default MealList;
