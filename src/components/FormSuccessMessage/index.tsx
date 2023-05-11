import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import CheckSuccess from '../../assets/images/CheckSuccess.png';

const FormSucessMessage = () => {
  return (
    <div className="layaout-container">
      <div className="success-message-container">
        <MainImage src={CheckSuccess} alt="logo succes verde" />
        <h3>Thank you!</h3>
        <h4>We have received your message. We will reply to you shortly.</h4>
      </div>
    </div>
  );
};

export default FormSucessMessage;
