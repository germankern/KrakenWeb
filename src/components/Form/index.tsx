import React from 'react';
import './index.scss';
import useForm from '../../useForm';
import { ContactUsRequestProps } from '../../interfaces';

const Form = () => {
  const { formData, handleChangeFor, handleSubmit } = useForm<ContactUsRequestProps>((data) =>
    console.log('envio de datos de contact us', data)
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="layaout-mobile">
          <input
            type="text"
            placeholder="Name*"
            onChange={(e) => handleChangeFor('name')(e.target.value)}
            value={formData.name ?? ''}
            required
            pattern="[a-zA-Z\s-]+"
          />
          <input
            type="number"
            placeholder="Your phone number*"
            onChange={(e) => handleChangeFor('phoneNumber')(e.target.value)}
            value={formData.phoneNumber ?? ''}
            required
            pattern="[\d\- ]{7,15}"
          />
          <input
            type="text"
            placeholder="Subject*"
            onChange={(e) => handleChangeFor('subject')(e.target.value)}
            value={formData.subject ?? ''}
            required
          />
          <input
            type="email"
            placeholder="Your mail*"
            onChange={(e) => handleChangeFor('email')(e.target.value)}
            value={formData.email ?? ''}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
          />
          <input
            type="text"
            placeholder="Your message goes here"
            className="last-child"
            onChange={(e) => handleChangeFor('message')(e.target.value)}
            value={formData.message ?? ''}
            required
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
