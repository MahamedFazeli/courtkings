import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link, useNavigate } from 'react-router-dom';
import "./Payment.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardHolder: '',
    cardBrand: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zip: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.cardHolder) errors.cardHolder = 'Card Holder is required';
    if (!formData.cardBrand) errors.cardBrand = 'Card Brand is required';
    if (!formData.cardNumber) errors.cardNumber = 'Card Number is required';
    if (!formData.expiryDate) errors.expiryDate = 'Expiry Date is required';
    if (!formData.cvv) errors.cvv = 'CVV is required';
    if (!formData.zip) errors.zip = 'ZIP Code is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/confirmation');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="form-container">
      <ProgressBar animated now={66} label="66%" />
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Card Holder</label>
        <input
          type="text"
          name="cardHolder"
          value={formData.cardHolder}
          onChange={handleChange}
          className={formErrors.cardHolder ? 'error' : ''}
        />
        {formErrors.cardHolder && <span className="error-message">{formErrors.cardHolder}</span>}

        <label>Card Brand</label>
        <select
          name="cardBrand"
          value={formData.cardBrand}
          onChange={handleChange}
          className={formErrors.cardBrand ? 'error' : ''}
        >
          <option value="">Select a card brand</option>
          <option value="visa">Visa</option>
          <option value="mastercard">MasterCard</option>
        </select>
        {formErrors.cardBrand && <span className="error-message">{formErrors.cardBrand}</span>}

        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className={formErrors.cardNumber ? 'error' : ''}
        />
        {formErrors.cardNumber && <span className="error-message">{formErrors.cardNumber}</span>}

        <label>Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className={formErrors.expiryDate ? 'error' : ''}
          placeholder="MM/YY"
        />
        {formErrors.expiryDate && <span className="error-message">{formErrors.expiryDate}</span>}

        <label>CVV</label>
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          className={formErrors.cvv ? 'error' : ''}
        />
        {formErrors.cvv && <span className="error-message">{formErrors.cvv}</span>}

        <label>ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className={formErrors.zip ? 'error' : ''}
        />
        {formErrors.zip && <span className="error-message">{formErrors.zip}</span>}

        <div className="button">
          <button type="submit">Next</button>
          <Link to="/contact"><button type="button">Previous</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Payment;