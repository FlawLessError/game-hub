import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";

const RouterOutlet = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default RouterOutlet;
