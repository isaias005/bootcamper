import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { useHistory } from 'react-router-dom';

import WelcomeContainer from '../WelcomeContainer';
import LoginContainer from './LoginContainer';

const Home = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  if (!auth.isAuthenticated()) {
    return (
      <div className="Home">
        <div className="row">
          <WelcomeContainer actionPath="/signup" actionText="Registrate" welcomeHeader="Bienvenido de vuelta!" welcomeText="Ingresa tus datos para mantenerte conectado con nosotros." />
          <LoginContainer />
        </div>
      </div>
    );
  } else {
    history.push("/bootcamps");
    return false;
  }
}

export default Home;
