import "/src/styles/destination.css";
import { subNav } from "../../resources/data/data";
import { Navigation } from "/src/index";
import { Outlet } from "react-router-dom";

function PlanetSubComponent() {
  return (
    <section className="sub-planet-component">
      <Navigation list={subNav} isSub="true" style="planet-nav" />
      <Outlet />
    </section>
  );
}
export default PlanetSubComponent;
