import { Fragment } from "react";
import Head from "next/head";
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

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Delicio next - mongo db</title>
        <meta
          name="description"
          content="Choose city. placeholder Welcome to Juit: Eat healthy every day. Eat healthy every day. Hand-cooked dishes developed by nutrition experts and delivered to ..."
        />
      </Head>
      <h1 className="text-yellow-200">Welcome to Delicio</h1>
    </Fragment>
  );
};
export default HomePage;
