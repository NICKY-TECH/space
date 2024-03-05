import "/src/styles/destination.css";
import { SubHeading, Text, PlanetFooterDetails } from "/src/index";
import { useDispatch, useSelector } from "react-redux";
import { planetDetails } from "../../resources/data/data";
import { useLocation } from "react-router-dom";
import { selectTechState } from "../../feature/selectTechnology";
import { useEffect } from "react";

function PlanetDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const activePlanet = useSelector((state) => state.selectTech.value);
  useEffect(() => {
    if (location.pathname === "/destination" && activePlanet != 1) {
      dispatch(selectTechState(1));
    } else if (location.pathname === "/destination/mars" && activePlanet != 2) {
      dispatch(selectTechState(2));
    } else if (
      location.pathname === "/destination/europa" &&
      activePlanet != 3
    ) {
      dispatch(selectTechState(3));
    } else if (
      location.pathname === "/destination/titan" &&
      activePlanet != 4
    ) {
      dispatch(selectTechState(4));
    }
  }, [location.pathname]);
  return (
    <section className="moon-details">
      <SubHeading
        heading={
          activePlanet === 1
            ? planetDetails[0].main
            : activePlanet === 2
            ? planetDetails[1].main
            : activePlanet === 3
            ? planetDetails[2].main
            : planetDetails[3].main
        }
        style="planet-main-title"
      />
      <Text
        text={
          activePlanet === 1
            ? planetDetails[0].sub
            : activePlanet === 2
            ? planetDetails[1].sub
            : activePlanet === 3
            ? planetDetails[2].sub
            : planetDetails[3].sub
        }
        style="text-container-planet"
      />
      <footer>
        <PlanetFooterDetails
          top={
            activePlanet === 1
              ? planetDetails[0].footerOne.top
              : activePlanet === 2
              ? planetDetails[1].footerOne.top
              : activePlanet === 3
              ? planetDetails[2].footerOne.top
              : planetDetails[3].footerOne.top
          }
          bottom={
            activePlanet === 1
              ? planetDetails[0].footerOne.bottom
              : activePlanet === 2
              ? planetDetails[1].footerOne.bottom
              : activePlanet === 3
              ? planetDetails[2].footerOne.bottom
              : planetDetails[3].footerOne.bottom
          }
        />
        <PlanetFooterDetails
          top={
            activePlanet === 1
              ? planetDetails[0].footerTwo.top
              : activePlanet === 2
              ? planetDetails[1].footerTwo.top
              : activePlanet === 3
              ? planetDetails[2].footerTwo.top
              : planetDetails[3].footerTwo.top
          }
          bottom={
            activePlanet === 1
              ? planetDetails[0].footerTwo.bottom
              : activePlanet === 2
              ? planetDetails[1].footerTwo.bottom
              : activePlanet === 3
              ? planetDetails[2].footerTwo.bottom
              : planetDetails[3].footerTwo.bottom
          }
        />
      </footer>
    </section>
  );
}

export default PlanetDetails;
