import "./ConfirmationPage.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

const Confirmationpage = () => {
    return ( 
        <div className="container">
            <div className="text">

            
            <ProgressBar animated now={100} label="100%"/>
            <h1 className="">Register Complete</h1>
            <h2 >You'll receive a confirmation email shortly</h2>
            <div className="button2">
        <a href="/SEG_Project2"><button type="button">Return to Home</button></a>
            </div>
            </div>
        </div>
     );
        
}
 
export default Confirmationpage;