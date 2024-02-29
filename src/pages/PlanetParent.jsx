import "/src/styles/destination.css";
import { Header,PlanetSubComponent,Moon } from '/src/index';
import { mainNav } from "../resources/data/data";

function PlanetParent(){
return <section className="planet">
<Header items={mainNav}/>
<div className="planet-details-adjustment">
<div className="planet-two">
    <span>
01
    </span>
    <p>
    Pick your destination
    </p>
</div>
<article className="main-planet-content">
<Moon/>
<PlanetSubComponent/>

</article>
</div>

</section>
}

export default PlanetParent
