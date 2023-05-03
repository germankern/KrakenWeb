import React from 'react';
import './index.scss';

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <input type="text" placeholder="Name*" />
        <input type="number" placeholder="Your phone number*" />
        <input type="text" placeholder="Subject*" />
        <input type="email" placeholder="Your mail*" />
        <input type="text" placeholder="Your message goes here" className="last-child" />
        <button className="btn-form">Get in ToUch</button>
      </form>
    </div>
  );
};

export default Form;
