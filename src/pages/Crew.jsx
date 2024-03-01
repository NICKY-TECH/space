import "/src/styles/destination.css";
import {Header,PageLabel,CrewSectionOne,PageImage} from "/src/index";
import { mainNav } from "../resources/data/data";
import douglas from "/src/resources/images/crew/image-douglas-hurley.png";

function Crew() {
   return <section className="crew">
    <Header items={mainNav} />
    <div className="crew-details-adjustment">
    <div className="crew-main-section-one">
    <PageLabel text="MEET YOUR CREW" number="02"/>
        <div className="main-planet-content">
        <CrewSectionOne
            title="COMMANDER"
            name="DOUGLAS HURLEY"
            about="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2."
          />
          </div>
    </div>
    
      <div className="crew-image">
      <PageImage link={douglas}/>
      </div>

    </div>


    </section>
}

export default Crew;
