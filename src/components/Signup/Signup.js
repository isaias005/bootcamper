import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Auth';
import { useHistory } from 'react-router-dom';

import WelcomeContainer from '../WelcomeContainer';
import SignupContainer from './SignupContainer';
import LoadingSpinner from '../LoadingSpinner';

const Signup = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [isAuth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    auth.isAuthenticated()
      .then(value => {
        setAuth(value);
        if (isAuth) {
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
  }, [isAuth, history, auth])

  return (
    <div className="Signup">
      <div className="row">
        {
          loading ?
            <LoadingSpinner />
            :
            <React.Fragment>
              <SignupContainer />
              <WelcomeContainer actionPath="/" actionText="Logueate" welcomeHeader="Hola, amigo!" welcomeText="Unete y tendras todo tipo de bootcamps de programacion a tu alcance." />
            </React.Fragment>
        }
      </div>
    </div>
  );
}

export default Signup;
