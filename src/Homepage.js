import "./Homepage.css"
import Button from 'react-bootstrap/Button';

const Homepage = () =>{
    return (
        <main className="main-content">
          <div className="image-container">
            <div className="overlay-text">
                <h2>COURT KINGS <br /> Basketball Club</h2>
                <div className="slogan"><h1>DO IT</h1></div>
                <div className="register">
                <Button variant="dark" href="personal-info" size="lg" id="reg">Register</Button>
                </div>
            </div>
            
          </div>
        
        </main>
      );
}
export default Homepage;