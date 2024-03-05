import "/src/styles/destination.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCrewState } from "../../feature/selectCrew";

function SlideButton({ index }) {
  const dispatch = useDispatch();
  const selectedCrew = useSelector((state) => state.selectCrew.value);
  function select() {
    dispatch(selectCrewState(parseInt(index)));
  }

  return (
    <div
      className={
        parseInt(index) === selectedCrew
          ? "slide-button-active"
          : "slide-button-inactive"
      }
      onClick={select}
    ></div>
  );
}

export default SlideButton;
