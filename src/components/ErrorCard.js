import React from 'react';

const ErrorCard = (props) => {
  return(
    <div className="ErrorCard text--center">
      <span className="error-text text--light">Error: {props.error}</span>
    </div>
  )
}

export default ErrorCard;