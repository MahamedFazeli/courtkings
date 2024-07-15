import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Contact = () => {
    return (
        <div className="form-container">
            <ProgressBar animated now={33} label="33%"/>
            <h2>Contact Information</h2>
            <form>
            <label>Phone Number</label>
            <input type="text" name="phone" />
    
            <label>Confirm Phone Number</label>
            <input type="text" name="confirmPhone" />
    
            <label>Email</label>
            <input type="email" name="email" />
    
            <label>Confirm Email</label>
            <input type="email" name="confirmEmail" />
    
            <div className="button">
            <Link to="/payment"><button type="button">Next</button></Link>
            <Link to="/personal-info"><button type="button">Previous</button></Link>
            </div>
            
            </form>
        </div>
      );
}
export default Contact;