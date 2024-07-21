import React, { useState } from 'react';
import "./PersonalInfo.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';

function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.dob) errors.dob = 'Date of Birth is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/contact');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="form-container">
      <ProgressBar animated now={0} label="0%"/>
      <h2>Personal Information:</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={formErrors.firstName ? 'error' : ''}
        />
        {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={formErrors.lastName ? 'error' : ''}
        />
        {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}

        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={formErrors.gender ? 'error' : ''}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {formErrors.gender && <span className="error-message">{formErrors.gender}</span>}

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={formErrors.dob ? 'error' : ''}
        />
        {formErrors.dob && <span className="error-message">{formErrors.dob}</span>}

        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
}

export default PersonalInfo;