import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { useHistory } from 'react-router-dom';

import WelcomeContainer from '../WelcomeContainer';
import SignupContainer from './SignupContainer';

const Signup = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  if (!auth.isAuthenticated()) {
    return (
      <div className="Signup">
        <div className="row">
          <SignupContainer />
          <WelcomeContainer actionPath="/" actionText="Logueate" welcomeHeader="Hola, amigo!" welcomeText="Unete y tendras todo tipo de bootcamps de programacion a tu alcance." />
        </div>
      </div>
    );
  } else {
    history.push("/bootcamps");
    return false;
  }
}

export default Signup;
