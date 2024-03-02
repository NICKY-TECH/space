import "/src/styles/destination.css";
import { useDispatch,useSelector } from "react-redux";
import { selectTechState } from "../feature/selectTechnology";


function TechnologySlide({index}){
    const dispatch = useDispatch();
    const selectedTech = useSelector((state) => state.selectTech.value);
    function select (){
        dispatch(selectTechState(parseInt(index)))
    }
return <div className={selectedTech===parseInt(index)?"active-tech-slide":"inactive-tech-slide"} onClick={select}>
{index}
</div>
}

export default TechnologySlide