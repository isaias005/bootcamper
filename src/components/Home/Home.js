import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Auth';
import { useHistory } from 'react-router-dom';

import WelcomeContainer from '../WelcomeContainer';
import LoginContainer from './LoginContainer';
import LoadingSpinner from '../LoadingSpinner';

const Home = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    auth.isAuthenticated()
      .then(value => {
        if (value) {
          history.push("/bootcamps");
        } else {
          setLoading(false);
          return true;
        }
      })
      .catch(err => {
        setLoading(false);
        throw err;
      })
  }, [history, auth])

  return (
    <div className="Home">
      <div className="row">
        {
          loading ?
            <LoadingSpinner />
            :
            <React.Fragment>
              <WelcomeContainer actionPath="/signup" actionText="Registrate" welcomeHeader="Bienvenido de vuelta!" welcomeText="Ingresa tus datos para mantenerte conectado con nosotros." />
              <LoginContainer />
            </React.Fragment>
        }
      </div>
    </div>
  );
}

export default Home;
