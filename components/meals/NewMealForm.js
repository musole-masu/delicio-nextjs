import { useRef } from "react";
const NewMealForm = (props) => {
  const mealNameInputRef = useRef();
  const mealFullImgInputRef = useRef();
  const mealDishImgInputRef = useRef();
  const mealNumberOfDishInputRef = useRef();
  const mealDescriptionInputRef = useRef();
  const chefInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredMealName = mealNameInputRef.current.value;
    const enteredMealFullImg = mealFullImgInputRef.current.value;
    const enteredMealDishImg = mealDishImgInputRef.current.value;
    const enteredNumberOfDish = mealNumberOfDishInputRef.current.value;
    const enteredMealDescription = mealDescriptionInputRef.current.value;
    const enteredChef = chefInputRef.current.value;

    const enteredMealData = {
      meal_name: enteredMealName,
      meal_full_img: enteredMealFullImg,
      meal_dish_img: enteredMealDishImg,
      number_of_dish: enteredNumberOfDish,
      meal_description: enteredMealDescription,
      chef: enteredChef,
    };

    console.log(enteredMealData);

    props.onAddNewMeal(enteredMealData);
  };

  return (
    <div className="flex flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <div className="text-center">
        <h1 className="font-light text-4xl">Add a new Meal </h1>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="meal-name"
            className="block text-base font-normal text-gray-700"
          >
            Meal Name
          </label>
          <input
            type="text"
            id="meal-name"
            ref={mealNameInputRef}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div className="flex flex-row space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="meal-full-img"
              className="block text-base font-normal text-gray-700"
            >
              Meal full Image
            </label>
            <input
              type="text"
              name="meal-full-img"
              ref={mealFullImgInputRef}
              className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="meal-full-img"
              className="block text-base font-normal text-gray-700"
            >
              Meal dish image
            </label>
            <input
              type="text"
              name="meal-dish-img"
              ref={mealDishImgInputRef}
              className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="dishes"
            className="block text-base font-normal text-gray-700"
          >
            Number of dishes
          </label>
          <input
            type="number"
            max="10"
            min="1"
            name="dishes"
            ref={mealNumberOfDishInputRef}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-base font-normal text-gray-700"
          >
            Description
          </label>
          <textarea
            type="text"
            name="meal-name"
            ref={mealDescriptionInputRef}
            rows="3"
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full rounded-md"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="chef-name"
            className="block text-base font-normal text-gray-700"
          >
            Chef
          </label>
          <input
            type="text"
            name="chef-name"
            ref={chefInputRef}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div className="flex">
          <button className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl">
            Add Now{" "}
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMealForm;
