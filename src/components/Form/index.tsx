import React, { useState } from 'react';
import './index.scss';
import useForm from '../../useForm';
import { ContactUsRequestProps } from '../../interfaces';
import formService from '../../services/formService';
import FormSucessMessage from '../FormSuccessMessage';
import FormFailureMessage from '../FormFailureMessage';

const Form = () => {
  const [formStatus, setFormStatus] = useState<'none' | 'success' | 'failure'>('none');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formData, handleChangeFor, handleSubmit } = useForm<ContactUsRequestProps>(async () => {
    try {
      setIsSubmitting(true);
      await formService.postToGoogleScript(formData);
      setFormStatus('success');
    } catch (error) {
      setFormStatus('failure');
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="form-container">
      {formStatus === 'success' && <FormSucessMessage />}
      {formStatus === 'failure' && <FormFailureMessage />}
      {!isSubmitting && formStatus === 'none' && (
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
      )}
    </div>
  );
};

export default Form;
