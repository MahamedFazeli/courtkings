import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const TrainingSessions = () => {
  const [selectedCoach, setSelectedCoach] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDrill, setSelectedDrill] = useState('');
  const navigate = useNavigate();

  const handleCoachChange = (event) => {
    setSelectedCoach(event.currentTarget.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDrillChange = (event) => {
    setSelectedDrill(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Coach: ${selectedCoach}, Date: ${selectedDate}, Drill: ${selectedDrill} 
A confirmation Email will be sent shortly`);
navigate('/SEG_Project2');
  };

  const coaches = ['Coach 1', 'Coach 2', 'Coach 3', 'Coach 4'];
  const drills = ['Dribbling', 'Shooting', 'Defense', 'Passing'];

  return (
    <div className="container-fluid">
      <Row className="my-4">
        <Col className="text-center">
          <h1>Training Sessions</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Select a Coach</h2>
          <ToggleButtonGroup type="radio" name="coaches" className=" d-flex flex-column align-items-center btn-group-lg ">
            {coaches.map((coach, idx) => (
              <ToggleButton
                key={idx}
                id={`coach-${idx}`}
                type="radio"
                variant="none"
                name="coach"
                value={coach}
                checked={selectedCoach === coach}
                onChange={handleCoachChange}
                className="mb-3 btn-outline-dark"
              >
                {coach}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Col>
        <Col>
          <h2 className="text-center">Select Date</h2>
          <Form.Group controlId="date" className="d-flex justify-content-center">
            <Form.Control
              type="date"
              name="date"
              placeholder="Select Date"
              onChange={handleDateChange}
              className="w-50"
            />
          </Form.Group>
        </Col>
        <Col>
          <h2 className="text-center">Select Training Drill</h2>
          <ToggleButtonGroup type="radio" name="drills" className="d-flex flex-column align-items-center btn-group-lg">
            {drills.map((drill, idx) => (
              <ToggleButton
                key={idx}
                id={`drill-${idx}`}
                type="radio"
                variant="none"
                name="drill"
                value={drill}
                checked={selectedDrill === drill}
                onChange={handleDrillChange}
                className="mb-3 btn-outline-dark"
              >
                {drill}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button href='/SEG_Project2' variant="dark" onClick={handleSubmit}>
            Book
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TrainingSessions;