import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import CheckFailed from '../../assets/images/CheckFailed.png';
import { Link } from 'gatsby';

const FormFailureMessage = () => {
  return (
    <div className="layaout-container">
      <div className="failure-message-container">
        <div className="layaout-mobile-failure">
          <MainImage src={CheckFailed} alt="logo succes verde" />
          <h3>Oh no!</h3>
          <h4>Something went wrong. please try again</h4>
        </div>
        <Link className="btn-reset-form" to="/">
          Let’s try again
        </Link>
      </div>
    </div>
  );
};

export default FormFailureMessage;
