import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function HomePage() {
    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=25&nat=US')
            .then(response => response.json())
            .then(json => {
                setEmployees(json.results)
                console.log(json.results)
            })
    }, []);

    return (
        <div>
            <Jumbotron>where one chases after and achieves cognitive dissonance</Jumbotron>
            <>
                <Form.Label htmlFor="inputPassword5">Lurk for one of my employees</Form.Label>
                <Form.Control
                    type="input"
                    id="inputPassword5"
                    aria-describedby="employeeSearch"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    The World's first contactless search bar
  </Form.Text>
            </>

            <h3>Sift our employee directory here: </h3>
            <div>employees-set here</div>
            {/* Activity 16, week 19 shows you how to use map and props off of an array */}
            {/* Activity 17, week 19 shows you how to use forms, especially handleInputChange and handleFormSubmit */}
            {/* You may also need to use the filter method during your handleInputChange */}
        </div>
    )
}
