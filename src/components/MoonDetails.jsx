import "/src/styles/destination.css"
import { SubHeading,Text,PlanetFooterDetails } from "/src/index";

function MoonDetails (){
    return    <section className="moon-details">
    <SubHeading heading="MOON" style="planet-main-title"/>
    <Text text="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." style="text-container-planet"/>
<footer>
<PlanetFooterDetails top="Avg. distance" bottom="384,400 km"/>
<PlanetFooterDetails top="Est. travel time" bottom="3 days"/>
</footer>
    </section>
}

export default MoonDetails