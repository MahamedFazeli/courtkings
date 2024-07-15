import ProgressBar from 'react-bootstrap/ProgressBar';

import { Link } from 'react-router-dom';
const payment = () => {
    return (
        <div className="form-container">
            <ProgressBar animated now={66} label="66%"/>
            <h2>Payment Information</h2>
            <form>
                <label>Card Holder</label>
                <input type="text" name="cardHolder" />

                <label>Card Brand</label>
                <select name="cardBrand">
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                </select>

                <label>Card Number</label>
                <input type="text" name="cardNumber" />

                <label>Expiry Date</label>
                <input type="text" name="expiryDate" placeholder="MM/YY" />

                <label>CVV</label>
                <input type="text" name="cvv" />

                <label>ZIP Code</label>
                <input type="text" name="zip" />
                <div className="button">
                <a href="/confirmation"><button type="button">Submit</button></a>
                <Link to="/contact"><button type="button">Previous</button></Link>
                </div>
            </form>
            </div>
      );
}
export default payment; 
