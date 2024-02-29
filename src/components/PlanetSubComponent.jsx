import "/src/styles/destination.css";
import { subNav } from "../resources/data/data";
import { Navigation,MoonDetails,MarsDetails,EuropaDetails } from '/src/index';


function PlanetSubComponent(){
  return  <section className="sub-planet-component">
  <Navigation list={subNav} style="planet-nav"/>
<EuropaDetails/>

    </section>
}
export default PlanetSubComponent