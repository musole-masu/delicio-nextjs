import { useRouter } from "next/router";
const MealItem = ({ meal }) => {
  const router = useRouter();

  const showMealDetailHandler = () => {
    router.push("/meals/" + meal.id);
  };
  return (
    <div className="w-3/12  place-items-center space-y-2">
      <img src={meal.image_dish} className=" w-auto h-auto" alt={meal.title} />
      <div className="text-center">
        <h3 className="text-xl font-normal">
          {meal.title}{" "}
          <span className="px-3 font-light text-yellow-500">
            ({meal.dishes})
          </span>
        </h3>
        <p className="text-gray-500 text-base">{meal.chef}</p>
        <button
          onClick={showMealDetailHandler}
          className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2"
        >
          Details
        </button>
      </div>
    </div>
  );
};
export default MealItem;
