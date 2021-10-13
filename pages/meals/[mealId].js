import { useRouter } from "next/router";

const Meal = () => {
  const router = useRouter();

  const mealId = router.query.mealId;
  console.log(mealId);
  return <h1>Single Meal</h1>;
};
export default Meal;
