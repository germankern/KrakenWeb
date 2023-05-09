import React from 'react';
import './index.scss';
import useForm from '../../useForm';
import { ContactUsRequestProps } from '../../interfaces';
import formService from '../../services/formService';

// const URL_GOOGLE_SCRIPT =
//   'https://script.google.com/macros/s/AKfycbzPH4Q87Mm8C4jhesbm5MTNND0DhfHmBN1JyZ-KyUhutHWe4Mfzy8781ydpd43DCvURIw/exec';

const Form = () => {
  const { formData, handleChangeFor, handleSubmit } = useForm<ContactUsRequestProps>(
    formService.postToGoogleScript
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="layaout-mobile">
          <input
            type="text"
            placeholder="Name*"
            onChange={(e) => handleChangeFor('Name')(e.target.value)}
            value={formData.Name ?? ''}
            required
            name="Name"
            pattern="[a-zA-Z\s-]+"
          />
          <input
            type="number"
            placeholder="Your phone number*"
            onChange={(e) => handleChangeFor('PhoneNumber')(e.target.value)}
            value={formData.PhoneNumber ?? ''}
            required
            name="Phone number"
            pattern="[\d\- ]{7,15}"
          />
          <input
            type="text"
            placeholder="Subject*"
            onChange={(e) => handleChangeFor('Subject')(e.target.value)}
            value={formData.Subject ?? ''}
            required
            name="Subject"
          />
          <input
            type="email"
            placeholder="Your mail*"
            onChange={(e) => handleChangeFor('Email')(e.target.value)}
            value={formData.Email ?? ''}
            required
            name="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
          />
          <input
            type="text"
            placeholder="Your message goes here"
            className="last-child"
            onChange={(e) => handleChangeFor('Message')(e.target.value)}
            value={formData.Message ?? ''}
            required
            name="Message"
          />
        </div>
        <button className="btn-form" type="submit">
          Get in ToUch
        </button>
      </form>
    </div>
  );
};

export default Form;
