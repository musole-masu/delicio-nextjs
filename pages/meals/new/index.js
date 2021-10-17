import { useRouter } from "next/router";
import NewMealForm from "../../../components/meals/NewMealForm";
const NewMeals = () => {
  const router = useRouter();
  async function addNewMealHandler(enteredMealData) {
    const response = await fetch("/api/new-meal", {
      method: "POST",
      body: JSON.stringify(enteredMealData),
      headers: {
        "content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    router.replace("/meals");
  }
  return <NewMealForm onAddNewMeal={addNewMealHandler} />;
};
export default NewMeals;
