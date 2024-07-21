import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    confirmPhone: '',
    email: '',
    confirmEmail: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.phone) errors.phone = 'Phone Number is required';
    if (!formData.confirmPhone) errors.confirmPhone = 'Confirm Phone Number is required';
    if (formData.phone !== formData.confirmPhone) errors.confirmPhone = 'Phone numbers do not match';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.confirmEmail) errors.confirmEmail = 'Confirm Email is required';
    if (formData.email !== formData.confirmEmail) errors.confirmEmail = 'Emails do not match';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/payment');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="form-container">
      <ProgressBar animated now={33} label="33%" />
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={formErrors.phone ? 'error' : ''}
        />
        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}

        <label>Confirm Phone Number</label>
        <input
          type="text"
          name="confirmPhone"
          value={formData.confirmPhone}
          onChange={handleChange}
          className={formErrors.confirmPhone ? 'error' : ''}
        />
        {formErrors.confirmPhone && <span className="error-message">{formErrors.confirmPhone}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'error' : ''}
        />
        {formErrors.email && <span className="error-message">{formErrors.email}</span>}

        <label>Confirm Email</label>
        <input
          type="email"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleChange}
          className={formErrors.confirmEmail ? 'error' : ''}
        />
        {formErrors.confirmEmail && <span className="error-message">{formErrors.confirmEmail}</span>}

        <div className="button">
          <button type="submit">Next</button>
          <Link to="/personal-info"><button type="button">Previous</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Contact;