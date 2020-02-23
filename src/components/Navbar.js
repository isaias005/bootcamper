import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from './Auth/';
import Brand from './Brand'
import search from '../assets/search-white.svg'
import plus from '../assets/plus.svg'
import logout from '../assets/logout.svg'

const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [currentUserRole, setCurrentUserRole] = useState("");

  useEffect(() => {
    auth.getCurrentUser()
      .then(user => {
        setCurrentUserRole(user.role);
      })
  })

  const onLogout = () => {
    try {
      auth.logout().then(() => {
        history.push('/');
      })
    } catch (err) {
      return <h1>Error al cerrar sesion: {err.message}</h1>
    }
  }

  if (!auth.isAuthenticated()) {
    return false;
  }

  return (
    <div className="Navbar text--light">
      <div className="container row">
        <Brand />
        <div className="navbar-items">
          <Link to="/bootcamps" className="navbar-item__link"><img src={search} className="navbar-item__icon" /><span className="navbar-item__text">Buscar Bootcamps</span></Link>
          {
            currentUserRole === "admin" || currentUserRole === "publisher" ?
              <Link to="/add-bootcamp" className="navbar-item__link"><img src={plus} className="navbar-item__icon" /><span className="navbar-item__text">Añadir Bootcamp</span></Link>
              : false
          }
          <button onClick={onLogout} className="navbar-item__link"><img src={logout} className="navbar-item__icon" /><span className="navbar-item__text">Cerrar Sesion</span></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;