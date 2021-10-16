import { useRouter } from "next/router";
const ChefItem = ({ chef }) => {
  const router = useRouter();

  const showChefDetailHandler = () => {
    router.push("/chefs/" + chef.id);
  };
  return (
    <div className="w-3/12  place-items-center space-y-4">
      <img src={chef.image_full} className="w-auto h-auto" alt={chef.chef} />
      <div className="text-center">
        <h3 className="text-xl font-normal">
          {chef.chef}{" "}
          <span className="px-3 font-light text-yellow-500">
            ({chef.rates})
          </span>
        </h3>
        <button
          onClick={showChefDetailHandler}
          className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2"
        >
          Details
        </button>
      </div>
    </div>
  );
};
export default ChefItem;
