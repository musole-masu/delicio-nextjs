import Link from "next/link";
const MainNavigation = () => {
  return (
    <div className="relative md:fixed w-full">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <div>
                <Link href="/">
                  <span className="font-bold text-2xl text-indigo-900">
                    Delicio
                  </span>
                </Link>
              </div>
              <div>
                <Link href="/meals">
                  <span className="font-bold text-2xl text-indigo-900">
                    Our Meals
                  </span>
                </Link>
                <Link href="/meals">
                  <span className="font-bold text-2xl text-indigo-900">
                    Our Chefs
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <Link href="/login">
                <span className="font-bold text-2xl text-indigo-900">
                  LOGIN
                </span>
              </Link>
              <Link href="/login">
                <span className="font-bold text-2xl text-indigo-900">
                  SIGN UP
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
