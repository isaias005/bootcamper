import React, { useState, useEffect, useContext } from 'react';
import { BootcampContext } from '../Bootcamp';
import { AuthContext } from '../Auth';
import { useHistory } from 'react-router-dom';

import BootcampList from './BootcampList';
import SearchBar from './SearchBar';
import LoadingSpinner from '../LoadingSpinner';

const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const bootcampContext = useContext(BootcampContext);
  const auth = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);

    auth.isAuthenticated()
    .then(value => {
      if (value) {
        return true;
      } else {
        history.push("/");
      }
    })
    .catch(err => {
      throw err;
    })

    bootcampContext.getAllBootcamps().then(data => {
      setBootcamps(data);
      setLoading(false);
    })
      .catch(err => {
        throw err;
      })
  }, [bootcampContext, auth, history])

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="Bootcamps container">
      {
        loading ?
          <LoadingSpinner />
          :
          <React.Fragment>
            <SearchBar onSearch={handleSearch} />
            <BootcampList bootcamps={bootcamps} searchValue={searchValue} />
          </React.Fragment>
      }
    </div>
  )
}

export default Bootcamps;