import "/src/styles/destination.css";
import { Header,Planet,PageLabel } from '/src/index';
import { Outlet, useLocation} from "react-router-dom";
import moon from "/src/resources/images/destination/image-moon.png"
import mars from "/src/resources/images/destination/image-mars.png"
import europa from "/src/resources/images/destination/image-europa.png";
import titan from "/src/resources/images/destination/image-titan.png"

function PlanetParent(){
    const location = useLocation()
return <section className="planet">
<Header/>
<div className="planet-details-adjustment">
<PageLabel text="PICK YOUR DESTINATION" number="01"/>
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
