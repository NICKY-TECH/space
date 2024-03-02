import "/src/styles/destination.css";
import {
  Header,
  PageLabel,
  CrewSectionOne,
  PageImage,
  SlideButton,
} from "/src/index";
import { mainNav } from "../resources/data/data";
import douglas from "/src/resources/images/crew/image-douglas-hurley.png";
import mark from "/src/resources/images/crew/image-mark-shuttleworth.png";
import victor from "/src/resources/images/crew/image-victor-glover.png";
import ansari from "/src/resources/images/crew/image-anousheh-ansari.png";
import { useSelector } from "react-redux";

function Crew() {
  const selectedCrew = useSelector((state) => state.selectCrew.value);
  return (
    <section className="crew">
      <Header items={mainNav} />
      <div className="crew-details-adjustment">
      <PageLabel text="MEET YOUR CREW" number="02" />
        <div className="crew-main-section-one">
          <div className="main-crew-content">
            {selectedCrew === 0 ? (
              <CrewSectionOne
                title="COMMANDER"
                name="DOUGLAS HURLEY"
                about="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2."
              />
            ) : selectedCrew === 1 ? (
              <CrewSectionOne
                title="MISSION SPECIALIST"
                name="MARK SHUTTLEWORTH"
                about="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist."
              />
            ) : selectedCrew === 2 ? (
              <CrewSectionOne
                title="PILOT"
                name="VICTOR GLOVER"
                about="Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.."
              />
            ) : (
              <CrewSectionOne
                title="FLIGHT ENGINEER"
                name="ANOUSHEH ANSARI"
                about="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. "
              />
            )}
            <div className="slide-navigation">
            <SlideButton index="0" />
            <SlideButton index="1" />
            <SlideButton index="2" />
            <SlideButton index="3" />
          </div>
          </div>
          <div className="crew-image">
          {selectedCrew === 0 ? (
            <PageImage link={douglas} />
          ) : selectedCrew === 1 ? (
            <PageImage link={mark} />
          ) : selectedCrew === 2 ? (
            <PageImage link={victor} />
          ) : (
            <PageImage link={ansari} />
          )}
        </div>
        </div>

        
      </div>
    </section>
  );
}

export default Crew;
