import { MongoClient } from "mongodb";
import { Fragment } from "react";
import { useState, useEffect, useReducer } from "react";
import Head from "next/head";
import MealList from "../components/meals/MealList";
import ChefList from "../components/chefs/ChefList";
const DUMMY_CHEFS = [
  {
    id: "chef1",
    chef: "Henrica Doco",
    image_full: "/chefs/dahiana-waszaj-cookChef%232.PNG",
    rates: 4,
    description:
      "We love variety of colors and good food. And good food does not need any additives.",
  },
  {
    id: "chef2",
    chef: "Henrica Doco",
    image_full: "/chefs/petr-sevcovic-cookChef%233.PNG",
    rates: 4,
    description:
      "We love variety of colors and good food. And good food does not need any additives.",
  },
  {
    id: "chef3",
    chef: "Henrica Doco",
    image_full: "/chefs/jeff-siepman-cookChef%231.PNG",
    rates: 4,
    description:
      "We love variety of colors and good food. And good food does not need any additives.",
  },
  {
    id: "chef4",
    chef: "Henrica Doco",
    image_full: "/chefs/dahiana-waszaj-cookChef%232.PNG",
    rates: 4,
    description:
      "We love variety of colors and good food. And good food does not need any additives.",
  },
];
const DUMMY_MEALS = [
  {
    id: "meal1",
    title: "Red coconut curry",
    chef: "Henrica Doco",
    image_dish: "/meals/baiq-daling-meal%237.PNG",
    image_full: "/meals/baiq-daling-meal%237.JPG",
    dishes: 4,
    description:
      "Red curry, black rice, colorful vegetables and delicious chicken breast. We love variety of colors and good food. And good food does not need any additives. Therefore, our coconut curry sauce consists only of natural ingredients such as coconut milk, red chilies, lemongrass, kaffir lime leaves, bananas and mangoes (so that it is not quite as spicy).",
  },
  {
    id: "meal2",
    title: "Chicken Tajine",
    chef: "Henrica Doco",
    image_dish: "/meals/khloe-arledge-meal%235.PNG",
    image_full: "/meals/khloe-arledge-meal%235.JPG",
    dishes: 2,
    description:
      "A culinary trip to Morocco. An aromatic tomato and vegetable tajine with oriental spices, chicken breast and fruity apricot bulgur with roasted cashews.",
  },
  {
    id: "meal3",
    title: "Chicken Tajine",
    chef: "Henrica Doco",
    image_dish: "/meals/eiliv-sonas-aceron-meal%233.PNG",
    image_full: "/meals/eiliv-sonas-aceron-meal%233.JPG",
    dishes: 2,
    description:
      "A culinary trip to Morocco. An aromatic tomato and vegetable tajine with oriental spices, chicken breast and fruity apricot bulgur with roasted cashews.",
  },
  {
    id: "meal4",
    title: "Chicken Tajine",
    chef: "Henrica Doco",
    image_dish: "/meals/mariana-medvedeva-meal%234.PNG",
    image_full: "/meals/mariana-medvedeva-meal%234.JPG",
    dishes: 2,
    description:
      "A culinary trip to Morocco. An aromatic tomato and vegetable tajine with oriental spices, chicken breast and fruity apricot bulgur with roasted cashews.",
  },
];
const MEAL_CATEGORY = [
  "All Dishes",
  "New",
  "High Protein",
  "Lower Carb",
  "<450 kcal",
  "Vegetarian",
  "Vegan",
];
const mealsFilterReduder = (state, action) => {
  if (action.type === "ALL DISHES") {
    return { mealCategory: action.type, meals: action.value };
  }
  if (action.type === "HIGH PROTEIN") {
    return { mealCategory: action.type, meals: action.value };
  }
  if (action.type === "LOWER CARB") {
    return { mealCategory: action.type, meals: action.value };
  }
  if (action.type === "<450 KCAL") {
    return { mealCategory: action.type, meals: action.value };
  }
  if (action.type === "VEGAN") {
    return { mealCategory: action.type, meals: action.value };
  }
  if (action.type === "VEGETARIAN") {
    return { mealCategory: action.type, meals: action.value };
  }
};
const HomePage = (props) => {
  const [selectedMealCat, setSelectedMealCat] = useState("");

  useEffect(() => {
    setSelectedMealCat("All Dishes");
  }, []);

  const [mealsState, dispatchMeal] = useReducer(mealsFilterReduder, {
    mealCategory: "All Dishes",
    meals: props.meals,
  });

  const filterMealByCatHandler = (event) => {
    const selectedCategory = event.target.dataset.mssg;
    setSelectedMealCat(selectedCategory);

    dispatchMeal({
      type: selectedCategory.toUpperCase(),
      value: props.meals.filter((meal) => meal.category === selectedCategory),
    });
  };

  return (
    <Fragment>
      <Head>
        <title>Delicio next - mongo db</title>
        <meta
          name="description"
          content="Choose city. placeholder Welcome to Juit: Eat healthy every day. Eat healthy every day. Hand-cooked dishes developed by nutrition experts and delivered to ..."
        />
      </Head>
      <div className="flex flex-col">
        <div className="text-center">
          <h1 className="font-bold text-5xl text-gray-600">
            Eat healthy every day.{" "}
          </h1>
          <h1 className="font-light text-3xl mt-10">
            The most delicious food in your town.
          </h1>
          <p className="text-gray-700 text-xl font-light">
            New dishes every week, created by our nutritionists and cooked by
            our chefs just for you.
          </p>
        </div>
        <div className="flex flex-row mx-auto space-x-5 mt-10">
          {MEAL_CATEGORY.map((category) => (
            <span
              className={`font-normal  border border-yellow-500 px-4 py-1 rounded-md hover:text-gray-50 hover:bg-yellow-500 cursor-pointer ${
                selectedMealCat === category
                  ? "bg-yellow-500 text-gray-50"
                  : "text-gray-700"
              }`}
              data-mssg={category}
              key={category}
              onClick={filterMealByCatHandler}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="flex flex-row space-x-12 mt-20">
          <MealList meals={mealsState.meals} />
        </div>
        <div className="text-center mt-20">
          <h1 className="font-bold text-5xl text-gray-600">Our Food Team. </h1>

          <p className="text-gray-700 text-xl font-light  mt-5">
            They use high quality, natural ingredients from selected suppliers -
            and never any flavorings, preservatives, flavor enhancers or other
            additives.
          </p>
        </div>
        <div className="flex flex-row space-x-12 mt-20">
          <ChefList chefs={props.chefs} />{" "}
        </div>
      </div>
    </Fragment>
  );
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongoDbUserName}:${process.env.mongoDbUserPassword}@delicio.d7fro.mongodb.net/delicio?retryWrites=true&w=majority`
  );

  const db = client.db();
  const mealsCollection = db.collection("meals");

  const fetchedMeals = await mealsCollection.find().toArray();
  client.close();
  return {
    props: {
      meals: fetchedMeals.map((meal) => ({
        title: meal.meal_name,
        description: meal.meal_description,
        image_full: meal.meal_full_img,
        image_dish: meal.meal_dish_img,
        dishes: meal.number_of_dish,
        chef: meal.chef,
        category: meal.category,
        id: meal._id.toString(),
      })),
      chefs: DUMMY_CHEFS,
    },
  };
}
export default HomePage;
