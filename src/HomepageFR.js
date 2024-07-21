import "./Homepage.css"
import Button from 'react-bootstrap/Button';

const HomepageFR = () =>{
    return (
        <main className="main-content">
          <div className="image-container">
            <div className="overlay-text">
                <h2>COURT KINGS <br /> Club de Basketball</h2>
                <div className="slogan"><h1>FAITES-LE</h1></div>
                <div className="register">
                <Button href="personal-info" size="lg" id="reg" className="register-button">S'inscrire</Button>
                </div>
            </div>
            
          </div>
        
        </main>
      );
}
export default HomepageFR;