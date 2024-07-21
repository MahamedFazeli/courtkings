import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { data2 } from './data2';
import Table from 'react-bootstrap/Table';
import "./Opencourt.css"

const Opencourt = () => {
  const [search, setSearch] = useState('');

  const filterData = (item) => {
    const lowerCaseSearch = search.toLowerCase().trim();
    return (
      item.date.toLowerCase() === lowerCaseSearch
    );
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col><h1 className='openCourtheader'>Search a Date</h1></Col>
        <Col><h1 className='openCourtheader'>List of open courts</h1></Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <InputGroup>
              <Form.Control onChange={(event) => setSearch(event.target.value)} placeholder="MM/DD/YYYY"/>
            </InputGroup>
          </Form>
        </Col>
        <Col>
            <div className="table">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Available Times</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data2.filter((item) => {
                        return search === "" ? item : filterData(item);
                    }).map((item) => (
                        <tr key={item.date + item.time}>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Opencourt;