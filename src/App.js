import './App.css';
import Navbar from "./Navbar"
import Homepage from "./Homepage"
import PersonalInfo from "./PersonalInfo"
import Contact from "./Contact"
import Payment from "./Payment"
import Chat from "./Chat"
import Tournaments from "./Tournaments"
import OpenCourt from "./OpenCourt"
import TrainingVideos from "./TrainingVideos"
import TrainingSessions from "./TrainingSessions"
import Confirmation from "./ConfirmationPage"
import TournamentRegister from "./TournamentRegister"
import NavbarFR from "./NavbarFR"
import HomepageFR from "./HomepageFR"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SEG_Project2" element={<><Navbar /><Homepage /></>} />
        <Route path="/SEG_Project2FR" element={<><NavbarFR /><HomepageFR /></>} />
        <Route path="/personal-info" element={<><Navbar /><PersonalInfo /></>} />
        <Route path="/contact" element={<><Navbar /><Contact/></>} />
        <Route path="/payment" element={<><Navbar /><Payment/></>} />
        <Route path="/tournaments" element={<><Navbar /><Tournaments /></>} />
        <Route path="/open-court" element={<><Navbar /><OpenCourt /></>} />
        <Route path="/training-videos" element={<><Navbar /><TrainingVideos/></>} />
        <Route path="/training-sessions" element={<><Navbar /><TrainingSessions/></>} />
        <Route path="/chat" element={<><Navbar /><Chat /></>} />
        <Route path="/confirmation" element={<><Navbar /><Confirmation/></>} />
        <Route path="/tournament-register" element={<><Navbar /><TournamentRegister/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
