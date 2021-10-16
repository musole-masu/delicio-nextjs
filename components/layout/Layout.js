import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="relative h-full">
        <MainNavigation />
        <main className="w-full max-w-7xl mx-auto py-40">{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
