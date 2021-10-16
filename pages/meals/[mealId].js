import { useRouter } from "next/router";
import MealDetail from "../../components/meals/MealDetail";

const Meal = () => {
  const router = useRouter();

  const mealId = router.query.mealId;
  console.log(mealId);
  return (
    <div>
      <MealDetail
        image_full="/meals/baiq-daling-meal%237.JPG"
        title="Chicken with Pumpkin-Mash"
        chef_name="Henrico do Goma"
        chef_image="/chefs/dahiana-waszaj-cookChef%232.PNG"
        description="Red curry, black rice, colorful vegetables and delicious chicken breast. We love variety of colors and good food. And good food does not need any additives. Therefore, our coconut curry sauce consists only of natural ingredients such as coconut milk, red chilies, lemongrass, kaffir lime leaves, bananas and mangoes (so that it is not quite as spicy)."
        dishes="4"
        ingredients={["High Protein", "Lower Carb", "Vegetarian", "Vegan"]}
      />
    </div>
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { mealId: "meal1" } }, { params: { mealId: "meal2" } }],
  };
}
export async function getStaticProps(context) {
  const mealId = context.params.mealId;
  console.log(mealId);
  return {
    props: {
      meal_data: {
        id: mealId,
        image_full: "/meals/baiq-daling-meal%237.JPG",
        title: "Chicken with Pumpkin-Mash",
        chef_name: "Henrico do Goma",
        chef_image: "/chefs/dahiana-waszaj-cookChef%232.PNG",
        description:
          "Red curry, black rice, colorful vegetables and delicious chicken breast. We love variety of colors and good food. And good food does not need any additives. Therefore, our coconut curry sauce consists only of natural ingredients such as coconut milk, red chilies, lemongrass, kaffir lime leaves, bananas and mangoes (so that it is not quite as spicy).",
        dishes: "4",
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
