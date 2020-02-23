import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';

const WelcomeContainer = (props) => {
  return (
    <div className="WelcomeContainer text--light">
      <div className="column fill-height">
        <Brand />
        <div className="welcome">
          <div className="welcome-wrapper">
            <h2 className="display">{props.welcomeHeader}</h2>
            <div className="welcome__description"><span>{props.welcomeText}</span></div>
            <div className="welcome__action">
              <Link to={props.actionPath}>
                <button className="button button--outlined">
                  {props.actionText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeContainer;
