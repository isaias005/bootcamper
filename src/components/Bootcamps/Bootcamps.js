import React, { useState, useEffect } from 'react'
import BootcampList from './BootcampList'
import SearchBar from './SearchBar';

const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    setBootcamps([
      { 
        name: "bruh", 
        careers: ["Web Development", "UI/UX"],
        location:{
          city: "Lowell",
          state: "MA"
        },
        photo: "https://via.placeholder.com/250x150"
      },
      { 
        name: "bruh", 
        careers: ["Web Development", "UI/UX"],
        location:{
          city: "Lowell",
          state: "MA"
        },
        photo: "https://via.placeholder.com/250x150"
      },
      { 
        name: "bruh", 
        careers: ["Web Development", "UI/UX"],
        location:{
          city: "Lowell",
          state: "MA"
        },
        photo: "https://via.placeholder.com/250x150"
      },
      { 
        name: "bruh", 
        careers: ["Web Development", "UI/UX"],
        location:{
          city: "Lowell",
          state: "MA"
        },
        photo: "https://via.placeholder.com/250x150"
      }
    ]);
  }, [])
  
  return (
    <div className="Bootcamps container">
      <SearchBar />
      <BootcampList bootcamps={bootcamps} />
    </div>
  )
}

export default Bootcamps;