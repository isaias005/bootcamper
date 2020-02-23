import React from 'react'

const SearchBar = () => {
  return (
    <div className="SearchBar text--center">
      <div className="search__group">
        <h1 className="text--secondary">Buscar bootcamps:</h1>
        <br />
        <input className="input" type="text" placeholder="Nombre de bootcamp" />
      </div>
    </div>
  )
}

export default SearchBar;