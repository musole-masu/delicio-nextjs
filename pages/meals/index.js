import { Fragment } from "react";
import { MongoClient } from "mongodb";
import "dotenv/config";
import MealList from "../../components/meals/MealList";
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
const Meals = (props) => {
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="font-light text-4xl">
          The most delicious food in your town.
        </h1>
        <br />
        <h2 className="text-gray-700 text-2xl font-light">
          New dishes every week, created by our nutritionists and cooked by our
          chefs just for you.
        </h2>
      </div>
      <div className="flex flex-row space-x-12 mt-20">
        <MealList meals={props.meals} />
      </div>
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fecth data from API
//   return {
//     props: {
//       meals: DUMMY_MEALS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const MONGODB_USERNAME = process.env.mongoDbUserName;
  const MONGODB_USER_PASSWORD = process.env.mongoDbUserPassword;

  const client = await MongoClient.connect(
    `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_USER_PASSWORD}@delicio.d7fro.mongodb.net/delicio?retryWrites=true&w=majority`
  );

  const db = client.db();

  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      meals: meals.map((meal) => ({
        title: meal.meal_name,
        description: meal.meal_description,
        image_full: meal.meal_full_img,
        image_dish: meal.meal_dish_img,
        dishes: meal.number_of_dish,
        chef: meal.chef,
        id: meal._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default Meals;
