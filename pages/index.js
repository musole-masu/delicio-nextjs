import "dotenv/config";
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
    image_full: "/chefs/dahiana-waszaj-cookChef%232.PNG",
    rates: 4,
    description:
      "We love variety of colors and good food. And good food does not need any additives.",
  },
  {
    id: "chef3",
    chef: "Henrica Doco",
    image_full: "/chefs/dahiana-waszaj-cookChef%232.PNG",
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
const HomePage = () => {
  return <h1 className="text-yellow-200">Welcome to Delicio</h1>;
};
export default HomePage;
