import React from 'react';

const SingleBootcampCourse = (props) => {
  return (
    <div className="SingleBootcampCourse">
      <h5 className="course-title text--light">{props.course.title}</h5>
      <div className="course-body">
        <h5 className="course-duration">Duracion: {props.course.weeks} Semanas</h5>
        <p className="course-description">{props.course.description}</p>
        <p className="course-cost"><span className="text--secondary">Costo:</span> ${props.course.tuition}</p>
      </div>
    </div>
  );
}

export default SingleBootcampCourse;