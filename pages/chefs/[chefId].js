import { useRouter } from "next/router";
const Chef = () => {
  const router = useRouter();

  console.log(router.query.chefId);
  return <h1>Single Chef</h1>;
};
export default Chef;
