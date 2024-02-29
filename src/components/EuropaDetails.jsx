import "/src/styles/destination.css"
import { SubHeading,Text,PlanetFooterDetails } from "/src/index";

function EuropaDetails (){
    return    <section className="moon-details">
    <SubHeading heading="EUROPA" style="planet-main-title"/>
    <Text text="The smallest of the four Galilean moons orbiting Jupiter, Europa is a  winter lover’s dream. With an icy surface, it’s perfect for a bit of  ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin." style="text-container-planet"/>
<footer>
<PlanetFooterDetails top="Avg. distance" bottom="628 mil. km"/>
<PlanetFooterDetails top="Est. travel time" bottom="3 years"/>
</footer>
    </section>
}

export default EuropaDetails