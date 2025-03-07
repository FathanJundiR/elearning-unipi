import { HeaderMegaMenu } from "../components/HeaderMegaMenu";
import Navbar from "../components/Navbar";
import { NavbarSimpleColored } from "../components/NavbarSimpleColored";
import HomePage from "./home/HomePage";

export default function BaseLayout() {
  return (
    <>
      <NavbarSimpleColored></NavbarSimpleColored>
      <div style={{ margin: "0  1rem 0px 14rem", paddingTop: "1rem" }}>
        <HomePage></HomePage>
      </div>
    </>
  );
}
