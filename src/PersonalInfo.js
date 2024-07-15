import "./PersonalInfo.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';


function PersonalInfo() {
    return (
      <div className="form-container">
        <ProgressBar/>
        <h2>Personal Information:</h2>
        <form>
          <label>First Name</label>
          <input type="text" name="firstName" />
  
          <label>Last Name</label>
          <input type="text" name="lastName" />
  
          <label>Gender</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
  
          <label>Date of Birth</label>
          <input type="date" name="dob" />
  
          <Link to="/contact"><button type="button">Next</button></Link>
        </form>
      </div>
    );
  }
  export default PersonalInfo;


