import "/src/styles/destination.css";
import { subNav } from "../resources/data/data";
import { Navigation,MoonDetails } from '/src/index';
function PlanetSubComponent(){
  return  <section className="sub-planet-component">
  <Navigation list={subNav} style="planet-nav"/>
  <MoonDetails/>

    </section>
}
export default PlanetSubComponent