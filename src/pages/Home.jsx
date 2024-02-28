import "/src/styles/destination.css";
import {SubHeading,MainHeading,Text,Navigation} from "/src/index"
import { mainNav } from "../resources/data/data";
import icon from "/src/resources/images/shared/logo.svg"

function Home() {
 return  <section className="home">
    <header>
 <div className="logo">
 <img src={icon}/>
 </div>
  <div className="main-nav-container">
  <hr/>
  <Navigation list={mainNav}/>
  </div>
   </header>
<section className="section-two">
<article className="home-section-one">
    <SubHeading heading="
  So, you want to travel"/>
  <MainHeading heading="Space"/>
  <Text text="Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!"/>
    </article>
    <article className="home-section-two"></article>
</section>
  </section>;
}

export default Home;
