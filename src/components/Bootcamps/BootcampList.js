import React from 'react'
import BootcampListItem from './BootcampListItem';

const BootcampList = (props) =>{
  return(
    <div className="BootcampList">
      {props.bootcamps.map(bootcamp =>{
        return <BootcampListItem bootcamp={bootcamp}/>
      })}
    </div>
  )
}

export default BootcampList;