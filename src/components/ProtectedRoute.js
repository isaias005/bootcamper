import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { AuthContext } from './Auth/';
import Navbar from './Navbar';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  return (
    <Route {...rest} render={
      (props) => {
        if (auth.isAuthenticated()) {
          return (
            <React.Fragment>
              <Navbar />
              <Component {...props} />
            </React.Fragment>
          );
        } else {
          return history.push("/");
        }
      }
    } />
  );
};

export default ProtectedRoute;