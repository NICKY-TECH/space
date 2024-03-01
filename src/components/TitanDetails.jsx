import "/src/styles/destination.css"
import { SubHeading,Text,PlanetFooterDetails } from "/src/index";

function TitanDetails (){
    return    <section className="moon-details">
    <SubHeading heading="TITAN" style="planet-main-title"/>
    <Text text="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." style="text-container-planet"/>
<footer>
<PlanetFooterDetails top="Avg. distance" bottom="1.6 bil. km"/>
<PlanetFooterDetails top="Est. travel time" bottom="7 yearsgit add ."/>
</footer>
    </section>
}

export default TitanDetails