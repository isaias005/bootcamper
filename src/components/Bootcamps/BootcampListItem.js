import React from 'react'
import { Link } from 'react-router-dom'

const BootcampListItem = (props) =>{
  return(
    <div className="BootcampListItem row">
        <img className="bootcamp-image" alt="Foto de bootcamp" src={props.bootcamp.photo}/>
        <div className="bootcamp-data column">
          <Link to={"/bootcamps/"+props.bootcamp._id} className="bootcamp-name text--secondary">{props.bootcamp.name}</Link>
          <div className="bootcamp-location text--light">País: {props.bootcamp.location.country}</div>
          <div className="bootcamp-careers">{props.bootcamp.careers.join(", ")}</div>
        </div>
    </div>
  )
}

export default BootcampListItem;