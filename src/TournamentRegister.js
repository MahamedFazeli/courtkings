import React, { useState } from 'react';
import { data } from './data';
import { useNavigate } from 'react-router-dom';
import './TournamentRegister.css'; // Assuming you have a CSS file for styling

const TournamentRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    tournamentName: '',
    phoneNumber: '',
    teamRegister: false,
    teamName: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.tournamentName) errors.tournamentName = 'Tournament Name is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (formData.teamRegister && !formData.teamName) errors.teamName = 'Team Name is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert(`Full Name: ${formData.fullName}, Tournament Name: ${formData.tournamentName}, Phone Number: ${formData.phoneNumber}, Team Register: ${formData.teamRegister ? 'Yes' : 'No'}, Team Name: ${formData.teamName}`);
      navigate('/SEG_Project2');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Full name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={formErrors.fullName ? 'error' : ''}
        />
        {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}

        <label>Tournament Name:</label>
        <select
          name="tournamentName"
          value={formData.tournamentName}
          onChange={handleChange}
          className={formErrors.tournamentName ? 'error' : ''}
        >
          <option value="">Select a tournament</option>
          {data.map((tournament) => (
            <option key={tournament.TournamentName} value={tournament.TournamentName}>
              {tournament.TournamentName}
            </option>
          ))}
        </select>
        {formErrors.tournamentName && <span className="error-message">{formErrors.tournamentName}</span>}

        <label>Phone number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={formErrors.phoneNumber ? 'error' : ''}
        />
        {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}

        <div className="checkbox-container">
          <label>
            Team Register:
            <input
              type="checkbox"
              name="teamRegister"
              checked={formData.teamRegister}
              onChange={handleChange}
            />
            Yes
          </label>
        </div>

        <label>Team Name:</label>
        <input
          type="text"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          disabled={!formData.teamRegister}
          className={formErrors.teamName ? 'error' : ''}
        />
        {formErrors.teamName && <span className="error-message">{formErrors.teamName}</span>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TournamentRegister;