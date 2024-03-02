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
                title="FLIGHT ENGINEER"
                name="ANOUSHEH ANSARI"
                about="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. "
  style=""
              />:""
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
