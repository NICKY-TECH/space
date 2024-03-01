import "/src/styles/destination.css";
import {SubHeading,Text} from "/src/index"


function CrewSectionOne ({title,name,about}){
return <section className="crew-section-one">
<p>{title}</p>
<SubHeading heading={name} style="planet-main-title"/>
<Text text={about} style="text-container-planet"/>

</section>
}

export default CrewSectionOne