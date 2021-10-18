import Meal from "../../pages/meals/[mealId]";

const MealDetail = (props) => {
  const mealIngredient = props.ingredients.map((ingredient) => (
    <span
      className="font-normal text-gray-700 border border-yellow-500 px-4 py-2 rounded-md"
      key={ingredient.index}
    >
      {ingredient}
    </span>
  ));
  return (
    <div className="flex flex-row p-0  shadow-xl rounded-2xl">
      <div className="w-4/12 ">
        <img src={props.image_full} className="rounded-l-2xl" />
      </div>
      <div className="w-8/12 flex flex-col p-10 space-y-4 justify-between ">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl text-gray-900 font-normal">
            {props.title}{" "}
            <span className="px-3 font-light text-yellow-500">
              ({props.dishes} dishes available)
            </span>
          </h3>
          <div className="flex space-x-4 ">
            <img src={props.chef_image} className="w-12 h-12" />
            <div>
              <h2 className="text-gray-900 font-light">{props.chef_name}</h2>
              <p className="text-gray-400">Hey dear, see my dish</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 ">
          <p className="text-gray-700">{props.description}</p>
        </div>
        <div className="flex flex-col ">
          <h2 className="text-xl text-gray-900 font-normal">Nutrition Info</h2>
          <div className="py-4 space-y-11 space-x-2">{mealIngredient}</div>
        </div>
        <div className="flex">
          <button className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex items-center px-4 py-4 rounded-xl">
            Buy now{" "}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MealDetail;
