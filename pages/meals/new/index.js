import { useRouter } from "next/router";
import NewMealForm from "../../../components/meals/NewMealForm";
import { Fragment } from "react";
import Head from "next/head";
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
  return (
    <Fragment>
      <Head>
        <title>Add new meal</title>
        <meta name="description" content="Add new meal" />
      </Head>
      <NewMealForm onAddNewMeal={addNewMealHandler} />
    </Fragment>
  );
};
export default NewMeals;
