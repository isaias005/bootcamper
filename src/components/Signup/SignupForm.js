import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorCard from '../ErrorCard';
import { AuthContext } from '../Auth';

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();

  const onSignup = async (e) => {
    e.preventDefault();
    try {
      if (name && email && password && confirmPassword && role) {
        if (password !== confirmPassword) {
          throw new Error("Las contraseñas no coinciden");
        }
        if (password.length < 6) {
          throw new Error("La contraseña tiene que ser mayor o igual a 6 caracteres");
        }
      } else {
        throw new Error("Rellena todos los campos");
      }
      setLoading(true);
      await auth.signup(name, email, password, role);
      setLoading(false);
      history.push("/bootcamps");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  return (
    <div className="SignupForm">
      <div className="column">
        <h2 className="display text--secondary text--center">Crea una cuenta</h2>
        <form onSubmit={onSignup} className="form column">
          <div className="form__group column">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" type="text" name="name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="password">Contraseña</label>
            <input className="input" type="password" name="password" autoComplete="on" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input className="input" type="password" name="confirmPassword" autoComplete="on" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="role">Rol</label>
            <select className="input" type="select" name="role" onChange={(e) => setRole(e.target.value)}>
              <option value="user">Usuario</option>
              <option value="publisher">Publicador</option>
            </select>
          </div>
          <div className="form-group text--center">
            {loading ?
              <button className="button button--secondary" type="submit" disabled><i className="fa fa-spinner fa-spin"></i>Registrarse</button>
              :
              <button className="button button--secondary" type="submit">Registrarse</button>
            }
          </div>
        </form>
        {error ? <ErrorCard error={error} /> : false}
      </div>
    </div>
  );
}

export default SignupForm;
