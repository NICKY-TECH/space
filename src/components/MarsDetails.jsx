import "/src/styles/destination.css"
import { SubHeading,Text,PlanetFooterDetails } from "/src/index";

function MarsDetails (){
    return    <section className="moon-details">
    <SubHeading heading="MARS" style="planet-main-title"/>
    <Text text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!" style="text-container-planet"/>
<footer>
<PlanetFooterDetails top="Avg. distance" bottom="225 mil. km"/>
<PlanetFooterDetails top="Est. travel time" bottom="9 months"/>
</footer>
    </section>
}

export default MarsDetails