import "/src/styles/destination.css";
import { Header, PageLabel,TechnologySlide,CrewSectionOne } from "/src/index";
import { useSelector } from "react-redux";

function Technology() {
  const selectedTech = useSelector((state) => state.selectTech.value);
  return (
    <section className="technology">
      <Header />
      <div className="technology-details-adjustment">
        <PageLabel text="SPACE LAUNCH 101" number="03" />
        <div className="main-tech-content">
          <div className="tech-content-container">
            <div className="tech-display-button">
<TechnologySlide index="1"/>
<TechnologySlide index="2"/>
<TechnologySlide index="3"/>
            </div>
            <div className="info-tech">
            {
                selectedTech === 1?    <CrewSectionOne
                title="THE TERMINOLOGY..."
                name="LAUNCH VEHICLE"
                about="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!"
  style="tech-section-one"
              />:selectedTech ===2?<CrewSectionOne
                title="THE TERMINOLOGY..."
                name="SPACEPORT"
                about="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch."
  style="tech-section-one"
              />: <CrewSectionOne
                title="THE TERMINOLOGY..."
                name="SPACE CAPSULE"
                about="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained."
  style="tech-section-one"
              />
            }
          
            </div>

          </div>
          <div className="tech-image-container">
            <div className={selectedTech===1?"tech-image-vehicle":selectedTech===2?"tech-image-space":"tech-image-capsule"}>
            </div>
   
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
