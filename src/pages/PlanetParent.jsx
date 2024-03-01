import "/src/styles/destination.css";
import { Header,Planet } from '/src/index';
import { mainNav } from "../resources/data/data";
import { Outlet, useLocation} from "react-router-dom";
import moon from "/src/resources/images/destination/image-moon.png"
import mars from "/src/resources/images/destination/image-mars.png"
import europa from "/src/resources/images/destination/image-europa.png";
import titan from "/src/resources/images/destination/image-titan.png"

function PlanetParent(){
    const location = useLocation()
    console.log(location)
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

{
    location.pathname ==="/destination"? <Planet src={moon}/>:  location.pathname ==="/destination/moon"? <Planet src={moon}/>: location.pathname ==='/destination/mars'?<Planet src={mars}/>:location.pathname ==="/destination/europa"?<Planet src={europa}/>: location.pathname ==="/destination/titan"?<Planet src={titan}/>:""
}

<Outlet/>

</article>
</div>

</section>
}

export default PlanetParent
