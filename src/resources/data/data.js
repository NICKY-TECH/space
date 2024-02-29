import moon from "/src/resources/images/destination/image-moon.png";
import titan from "/src/resources/images/destination/image-titan.png"
import mars from "/src/resources/images/destination/image-mars.png"
import europa from "/src/resources/images/destination/image-europa.png"

const mainNav = [
  {
    number: "00",
    text: "HOME",
  },
  {
    number: "01",
    text: "DESTINATION",
  },
  {
    number: "02",
    text: "CREW",
  },
  {
    number: "03",
    text: "TECHNOLOGY",
  },
];

const subNav = [
   {
    text:"MOON",
    number:""
   },
  {  text:"MARS",
  number:""
},
{    text:"EUROPA",
number:""
},
  {  text:"TITAN",
    number:""
}
];

const planetDetails =[
    {
main:"MOON",
sub:'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
img:moon,
footerOne:{
    top:"Avg. distance",
    bottom:"384,400 km"
},
footerTwo:{
    top:"Est. travel time",
    bottom:"3 days"
}
    },
    {
        main:"MARS",
        sub:'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        img:mars,
        footerOne:{
            top:"Avg. distance",
            bottom:"225 mil. km"
        },
        footerTwo:{
            top:"Est. travel time",
            bottom:"9 months"
        }
            },
 {
                main:"EUROP",
                sub:'The smallest of the four Galilean moons orbiting Jupiter, Europa is a  winter lover’s dream. With an icy surface, it’s perfect for a bit of  ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin. ',
                img:europa,
                footerOne:{
                    top:"Avg.distance",
                    bottom:" 628 mil. km"
                },
                footerTwo:{
                    top:"Est. travel time",
                    bottom:" 3 years"
                }
                    },
{
main:"TITAN",
                        sub:'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
                        img:titan,
                        footerOne:{
                            top:"Avg. distance",
                            bottom:"1.6 bil. km"
                        },
                        footerTwo:{
                            top:"Est. travel time",
                            bottom:"7 yearsgit add ."
                        }
                            }
]

export { mainNav,subNav,planetDetails };
