import './Scp.css';

function Scp ({scp})
{
    return(
        <div className="component container">
            <h1>{scp.Item}</h1>
            <h2>Class: {scp.Class}</h2>
            <img className="box" src= {scp.Image} alt=""/> 
            <h3>Special Containment Procedures:</h3>
            <p>{scp.Special_Containment_Procedures}</p>
            <h3>Description:</h3>
            <p>{scp.Description}</p>
        </div>
    )
}

export default Scp;