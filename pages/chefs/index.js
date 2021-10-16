import { Fragment } from "react";
import ChefList from "../../components/chefs/ChefList";
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
const Chefs = (props) => {
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="font-light text-4xl">
          The most delicious food in your town.
        </h1>
        <br />
        <h2 className="text-gray-700 text-2xl font-light">
          Home Cook Heroes are all around us, cooking food with heart and with
          passion just for you.
        </h2>
      </div>
      <div className="flex flex-row space-x-12 mt-20">
        <ChefList chefs={props.chefs} />
      </div>
    </Fragment>
  );
};
export async function getStaticProps() {
  return {
    props: {
      chefs: DUMMY_CHEFS,
    },
  };
}
export default Chefs;
