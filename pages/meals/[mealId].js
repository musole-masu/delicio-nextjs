import { useRouter } from "next/router";
import MealDetail from "../../components/meals/MealDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const Meal = (props) => {
  const router = useRouter();

  const mealId = router.query.mealId;
  console.log(mealId);
  return (
    <Fragment>
      <Head>
        <title>{props.meal_data.title}</title>
        <meta name="description" content={props.meal_data.description} />
      </Head>
      <div>
        <MealDetail
          image_full={props.meal_data.image_full}
          title={props.meal_data.title}
          chef_name={props.meal_data.chef_name}
          chef_image={props.meal_data.chef_image}
          description={props.meal_data.description}
          dishes={props.meal_data.dishes}
          ingredients={props.meal_data.ingredients}
        />
      </div>
    </Fragment>
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongoDbUserName}:${process.env.mongoDbUserPassword}@delicio.d7fro.mongodb.net/delicio?retryWrites=true&w=majority`
  );

  const db = client.db();

  const mealsCollection = db.collection("meals");
  const mealsId = await mealsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: mealsId.map((meal) => ({
      params: { mealId: meal._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const mealId = context.params.mealId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongoDbUserName}:${process.env.mongoDbUserPassword}@delicio.d7fro.mongodb.net/delicio?retryWrites=true&w=majority`
  );

  const db = client.db();

  const mealsCollection = db.collection("meals");
  const meal = await mealsCollection.findOne({ _id: ObjectId(mealId) });

  client.close();
  return {
    props: {
      meal_data: {
        id: meal._id.toString(),
        image_full: meal.meal_full_img,
        title: meal.meal_name,
        chef_name: meal.chef,
        chef_image: "/chefs/dahiana-waszaj-cookChef%232.PNG",
        description: meal.meal_description,
        dishes: meal.number_of_dish,
        ingredients: ["High Protein", "Lower Carb", "Vegetarian", "Vegan"],
      },
    },
  };
}
// export async function getStaticProps(context) {
//   return {
//     props: {
//       meal: {
//         image_full: "/meals/baiq-daling-meal%237.JPG",
//         title: "Chicken with Pumpkin-Mash",
//         chef_name: "Henrico do Goma",
//         chef_image: "/chefs/dahiana-waszaj-cookChef%232.PNG",
//         description:
//           "Red curry, black rice, colorful vegetables and delicious chicken breast. We love variety of colors and good food. And good food does not need any additives. Therefore, our coconut curry sauce consists only of natural ingredients such as coconut milk, red chilies, lemongrass, kaffir lime leaves, bananas and mangoes (so that it is not quite as spicy).",
//         dishes: "4",
//         ingredients: ["High Protein", "Lower Carb", "Vegetarian", "Vegan"],
//       },
//     },
//   };
// }
export default Meal;
