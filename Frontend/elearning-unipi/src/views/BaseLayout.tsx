import { Outlet } from "react-router-dom";
import { NavbarSimpleColored } from "../components/NavbarSimpleColored";
import classes from "./BaseLayout.module.css";

export default function BaseLayout() {
  return (
    <>
      <div className={classes.nav}>
        <NavbarSimpleColored></NavbarSimpleColored>
      </div>
      <div className={classes.container}>
        <Outlet />
      </div>
    </>
  );
}
