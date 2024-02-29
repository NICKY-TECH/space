import "/src/styles/destination.css"

function PlanetFooterDetails ({top,bottom}){
    return <div className="planet-footer-details">
    <p className="top"> 
{top}
    </p>
    <p className="bottom">
{bottom}
    </p>

    </div>
}

export default PlanetFooterDetails 