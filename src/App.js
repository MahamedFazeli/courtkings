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
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path='/SEG_Project2' element={<Homepage/>}/>
          <Route path="/personal-info" element={<PersonalInfo/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/tournaments" element={<Tournaments/>}/>
          <Route path="/open-court" element={<OpenCourt/>}/>
          <Route path="/training-videos" element={<TrainingVideos/>}/>
          <Route path="/training-sessions" element={<TrainingSessions/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="/tournament-register" element={<TournamentRegister/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
