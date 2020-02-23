import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorCard from '../ErrorCard'
import { AuthContext } from '../Auth';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await auth.login(email, password);
      setLoading(false);
      history.push("/bootcamps");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  return (
    <div className="LoginForm">
      <div className="column">
        <h2 className="display text--secondary text--center">Conectate a tu cuenta</h2>
        <form onSubmit={onLogin} className="form column">
          <div className="form__group column">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="password">Contraseña</label>
            <input className="input" type="password" name="password" value={password} autoComplete="on" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group text--center">
            {loading ?
              <button className="button button--secondary" type="submit" disabled><i className="fa fa-spinner fa-spin"></i>Conectarse</button>
              :
              <button className="button button--secondary" type="submit">Conectarse</button>
            }
          </div>
        </form>
        {error ? <ErrorCard error={error} /> : false}
      </div>
    </div>
  );
}

export default LoginForm;
