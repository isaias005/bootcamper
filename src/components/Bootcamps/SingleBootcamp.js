import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BootcampContext } from '../Bootcamp';
import { AuthContext } from '../Auth/';

import SingleBootcampCourse from './SingleBootcampCourse'
import Modal from '../Modal';
import EditBootcampForm from './EditBootcampForm'
import LoadingSpinner from '../LoadingSpinner';

const SingleBootcamp = () => {
  const { id } = useParams();
  const history = useHistory();
  const [bootcamp, setBootcamp] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUserRole, setCurrentUserRole] = useState("");
  const [showEditModal, setshowEditModal] = useState(false);
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
    bootcampContext.getSingleBootcamp(id)
      .then(data => {
        setBootcamp(data);
        auth.getCurrentUser()
          .then(user => {
            setCurrentUserId(user._id);
            setCurrentUserRole(user.role);
            setLoading(false);
          })
      })
      .catch(err => {
        setLoading(false);
        throw err;
      })

  }, [bootcampContext, id, auth, history]);

  const handleDelete = () => {
    bootcampContext.deleteBootcamp(id)
      .then(() => {
        history.push("/bootcamps");
      })
      .catch(err => {
        throw err;
      })
  }

  const handleEditModalOpen = () => {
    setshowEditModal(true);
  }

  const handleCloseModalOpen = () => {
    setshowEditModal(false);
  }

  return (
    <div className="SingleBootcamp row container">
      {
        loading ?
          <LoadingSpinner />
          :
          <React.Fragment>
            <Modal show={showEditModal} handleClose={handleCloseModalOpen}>
              {
                showEditModal ?
                  <EditBootcampForm bootcamp={bootcamp} />
                  :
                  false
              }
            </Modal>
            <div className="single-bootcamp__left column">
              <h1 className="text--secondary single-bootcamp__name">{bootcamp.name}</h1>
              <p className="single-bootcamp__description">{bootcamp.description}</p>
              <p className="single-bootcamp__cost">Costo promedio: <span className="text--secondary">${bootcamp.averageCost ? <span>{bootcamp.averageCost}</span> : 0}</span></p>
              <div className="single-bootcamp__courses column">
                {
                  bootcamp.courses ?
                    bootcamp.courses.map(course => { return <SingleBootcampCourse key={course._id} course={course} /> })
                    : false
                }
              </div>
            </div>
            <div className="single-bootcamp__right column">
              <img alt="Foto de bootcamp" src={bootcamp.photo} />
              {
                currentUserRole === "admin" || (currentUserRole === "publisher" && bootcamp.user === currentUserId) ?
                  <React.Fragment>
                    <button className="button button--tile" onClick={handleEditModalOpen}><i className="fa fa-edit"></i>Editar Bootcamp</button>
                    <button className="button button--tile button--secondary" onClick={handleDelete}><i className="fa fa-trash"></i>Eliminar Bootcamp</button>
                  </React.Fragment>
                  : false
              }
            </div>
          </React.Fragment>
      }
    </div>
  )
}

export default SingleBootcamp;