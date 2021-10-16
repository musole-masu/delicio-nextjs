import ChefItem from "./ChefItem";
const ChefList = (props) => {
  return (
    <div className="flex flex-row space-x-12 mt-20">
      {props.chefs.map((chef) => (
        <ChefItem chef={chef} key={chef.id} />
      ))}
    </div>
  );
};
export default ChefList;
