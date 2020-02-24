import React from 'react'
import BootcampListItem from './BootcampListItem';

const BootcampList = (props) => {
  return (
    <div className="BootcampList">
      {props.bootcamps.map(bootcamp => {
        const bootcampName = bootcamp.name.toLowerCase().trim();
        const searchValue = props.searchValue.toLowerCase().trim();

        if (props.searchValue && bootcampName.includes(searchValue)) {
          return <BootcampListItem handleDelete={props.handleDelete} key={bootcamp._id} bootcamp={bootcamp} />
        }
        else if (!props.searchValue) {
          return <BootcampListItem handleDelete={props.handleDelete} key={bootcamp._id} bootcamp={bootcamp} />
        } else {
          return false;
        }
      })}
    </div>
  )
}

export default BootcampList;