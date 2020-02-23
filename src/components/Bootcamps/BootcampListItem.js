import React from 'react'

const BootcampListItem = (props) =>{
  return(
    <div className="BootcampListItem row">
        <img src={props.bootcamp.photo}/>
        <div className="bootcamp-data column">
          <div className="bootcamp-name text--secondary">{props.bootcamp.name}</div>
          <div className="bootcamp-location text--light">{props.bootcamp.location.city+", "+props.bootcamp.location.state}</div>
          <div className="bootcamp-careers">{props.bootcamp.careers.join(", ")}</div>
        </div>
    </div>
  )
}

export default BootcampListItem;