import Table from 'react-bootstrap/Table';
import {data} from "./data"
import { useState } from 'react';
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import "./Tournament.css"
import Button from 'react-bootstrap/Button';

const Tournaments = () => {
    const [search, setSearch] = useState('')
    console.log(search)

    const filterData = (item) => {
        const lowerCaseSearch = search.toLowerCase();
        return (
          item.Date.toLowerCase().includes(lowerCaseSearch) ||
          item.TournamentName.toLowerCase().includes(lowerCaseSearch) ||
          item.AgeGender.toLowerCase().includes(lowerCaseSearch) ||
          item.RegistrationDeadline.toLowerCase().includes(lowerCaseSearch) ||
          item.League.toLowerCase().includes(lowerCaseSearch)
        );
      };

    return ( 
        <div className="container-fluid">
            <h1>Upcoming Tournaments</h1>
            <Form>
                <InputGroup>
                <Form.Control onChange={(event) => setSearch(event.target.value)} placeholder="Search"/>
                </InputGroup>
            </Form>
            <h3>List of Tournaments</h3>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Tournament Name</th>
                    <th>Gender</th>
                    <th>Registration Deadline</th>
                    <th>League</th>
                    </tr>
                </thead>
                <tbody>
            {data.filter((item) => {
                return search.toLowerCase() === "" ? item : filterData(item)
            }).map((item) =>(
                 <tr>
                 <td>{item.Id}</td>
                 <td>{item.Date}</td>
                 <td>{item.TournamentName}</td>
                 <td>{item.AgeGender}</td>
                 <td>{item.RegistrationDeadline}</td>
                 <td>{item.League}</td>
                 </tr>
            ))}
                </tbody>
            </Table>
            </div>
            <Button variant="dark" href="tournament-register" size="lg" id="reg">Sign up</Button>
        </div>
        
        
     );
}
 
export default Tournaments;