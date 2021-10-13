import { Fragment } from "react";
import Link from "next/link";

const Meals = () => {
  return (
    <Fragment>
      <h1>LISTES OF MEALS BY CHEFS</h1>
      <ul>
        <li>
          <Link href="/meals/salad_au_canard">
            <h3>Salad de Canard</h3>
          </Link>
          <Link href="/meals/salad_au_poulet">
            <h3>Salad de Poulet</h3>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Meals;
