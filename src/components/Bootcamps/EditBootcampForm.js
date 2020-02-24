import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BootcampContext } from '../Bootcamp';

import ErrorCard from '../ErrorCard';

const EditBootcampForm = ({ bootcamp }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(bootcamp.name);
  const [description, setDescription] = useState(bootcamp.description);
  const [photo, setPhoto] = useState(bootcamp.photo);
  const [careers, setCareers] = useState(bootcamp.careers);
  const history = useHistory();
  const bootcampContext = useContext(BootcampContext);

  const onEdit = async (e) => {
    e.preventDefault();
    if (name && description && careers && photo) {
      if (/\.(jpg|gif|png)$/.test(photo)) {
        setLoading(true);
        bootcampContext.updateSingleBootcamp(bootcamp._id, name, description, careers, photo)
          .then(() => {
            setLoading(false);
            history.go(`/bootcamps/${bootcamp._id}`);
          })
          .catch(err => {
            setLoading(false);
            setError(err.message);
          })
      } else {
        setError("Inserta un link de foto valido (jpg/gif/png)");
      }
    } else {
      setError("Rellena todos los campos");
    }
  }

  const onCheckboxChange = (e) => {
    const bootcampCareers = careers;
    if (e.target.checked) {
      bootcampCareers.push(e.target.value);
    } else {
      const index = bootcampCareers.indexOf(e.target.value);
      bootcampCareers.splice(index, 1);
    }
    setCareers(bootcampCareers);
  }

  return (
    <div className="EditBootcampForm LoginForm">
      <div className="column">
        <h2 className="display text--secondary text--center">Editar bootcamp</h2>
        <form onSubmit={onEdit} className="form column">
          <div className="form__group column">
            <label className="label" htmlFor="name">Nombre</label>
            <input className="input" type="text" name="name" defaultValue={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="photo">Link de foto</label>
            <input className="input" type="text" name="photo" defaultValue={photo} onChange={(e) => setPhoto(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label" htmlFor="description">Descripcion</label>
            <textarea className="input" type="text" name="description" defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form__group column">
            <label className="label">Carreras</label>
            <div className="row align-center">
              <input className="input" type="checkbox" value="Web Development" defaultChecked={careers.includes("Web Development")} onChange={onCheckboxChange} />
              <span>&nbsp;Desarrollo Web</span>
            </div>
            <div className="row align-center">
              <input className="input" type="checkbox" value="Mobile Development" defaultChecked={careers.includes("Mobile Development")} onChange={onCheckboxChange} />
              <span>&nbsp;Desarrollo Movil</span>
            </div>
            <div className="row align-center">
              <input className="input" type="checkbox" value="UI/UX" defaultChecked={careers.includes("UI/UX")} onChange={onCheckboxChange} />
              <span>&nbsp;UI/UX</span>
            </div>
            <div className="row align-center">
              <input className="input" type="checkbox" value="Data Science" defaultChecked={careers.includes("Data Science")} onChange={onCheckboxChange} />
              <span>&nbsp;Ciencia de datos</span>
            </div>
            <div className="row align-center">
              <input className="input" type="checkbox" value="Business" defaultChecked={careers.includes("Business")} onChange={onCheckboxChange} />
              <span>&nbsp;Negocios</span>
            </div>
            <div className="row align-center">
              <input className="input" type="checkbox" value="Other" defaultChecked={careers.includes("Other")} onChange={onCheckboxChange} />
              <span>&nbsp;Otros</span>
            </div>
          </div>
          <div className="form-group text--center">
            {loading ?
              <button className="button button--tile" type="submit" disabled><i className="fa fa-spinner fa-spin"></i>Editar</button>
              :
              <button className="button button--tile" type="submit"><i className="fa fa-send"></i>Editar</button>
            }
          </div>
        </form>
        {error ? <ErrorCard error={error} /> : false}
      </div>
    </div>
  );
}

export default EditBootcampForm;
