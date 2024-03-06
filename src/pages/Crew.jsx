import "/src/styles/destination.css";
import { Header, PageLabel, CrewSectionOne, SlideButton } from "/src/index";
import { useSelector } from "react-redux";
import douglas from "/src/resources/images/crew/image-douglas-hurley.png";
import mark from "/src/resources/images/crew/image-mark-shuttleworth.png";
import victor from "/src/resources/images/crew/image-victor-glover.png";
import ansari from "/src/resources/images/crew/image-anousheh-ansari.png";
import { motion,AnimatePresence } from "framer-motion";

function Crew() {
  const selectedCrew = useSelector((state) => state.selectCrew.value);
  const imageAnimation={
    initial:{
      x:200,
      opacity:0

    },
    animate:{
      x:0,
      opacity:1
    },
    exit:{
      x:-200,
      opacity:0
    }
  }
  return (
    <section className="crew">
      <Header />
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
                style="crew-section-one"
              />
            ) : selectedCrew === 1 ? (
              <CrewSectionOne
                title="MISSION SPECIALIST"
                name="MARK SHUTTLEWORTH"
                about="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist."
                style="crew-section-one"
              />
            ) : selectedCrew === 2 ? (
              <CrewSectionOne
                title="PILOT"
                name="VICTOR GLOVER"
                about="Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.."
                style="crew-section-one"
              />
            ) : (
              <CrewSectionOne
                title="FLIGHT ENGINEER"
                name="ANOUSHEH ANSARI"
                about="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. "
                style="crew-section-one"
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
          <AnimatePresence initial={false}>
          <motion.div className="specific-crew-image" variants={imageAnimation} initial="initial" animate="animate" exit="exit">
              {selectedCrew === 0 ? (
                <img src={douglas} />
              ) : selectedCrew === 1 ? (
                <img src={mark} />
              ) : selectedCrew === 2 ? (
                <img src={victor} />
              ) : (
                <img src={ansari} />
              )}
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crew;
