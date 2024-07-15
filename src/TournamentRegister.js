import React, { useState } from 'react';
import {data} from "./data"

const TournamentRegister = () => {
    const [isChecked, setIsChecked] = useState(false); 
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
    return ( 
        <div className="form-container">
        <h2>Register</h2>
        <form>
          <label>Full name:</label>
          <input type="text" name="fullName" />
          <label>Tournament Name:</label>
          <select name="tournamentName">
            {data.map((tournament) => (
                <option value="tournament1">{tournament.TournamentName}</option>
            ))}
          </select>
  
          <label>Phone number:</label>
          <input type="text" name="phoneNumber"/>
  
          <div className="checkbox-container">
            <label>
              Team Register:
              <input type="checkbox" onChange={handleCheckboxChange} />
              Yes
            </label>
          </div>
  
          <label>Team Name:</label>
          <input type="text" name="teamName" disabled={!isChecked} />
  
          <button type="submit" disabled={!isChecked}>Register</button>
        </form>
      </div>
     );
}
 
export default TournamentRegister;