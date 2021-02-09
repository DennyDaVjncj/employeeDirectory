import React,{useState,useEffect} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function HomePage() {
    const [employees,setEmployees]=useState([])//need to improve understanding|'employees' will come into play when I render specified data
    const [search,setSearch]=useState('');//improve understanding

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=25&nat=US')
            .then(response=>response.json())
            .then(json=>{
                setEmployees(json.results) 
                console.log(json.results)
            })
    },[]);
    //the definition of the rendered website
    return (
        <div>
            <Jumbotron>da Vjncj corp | Where dreams come to reality</Jumbotron>
            <>
                <Form.Label htmlFor="inputPassword5">Sift through our endentured servants</Form.Label>
                <Form.Control
                    type="input"
                    id="inputPassword5"
                    aria-describedby="employeeLurk"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    The World's first contactless search bar
                </Form.Text>
            </>
            
            <p>I just wanna see sum: {}</p>
            
        </div>
            
    )
}
//data being fetched successfully
    //import a bootstrap table to pass in fetched data to be rendered via table
    //allow for user to refine their searches with a drop down
    //input field for user to entrer their query
    //will have to fetch user input on ui

//  Activity 16, week 19 shows you how to use map and props off of an array 
//              Activity 17, week 19 shows you how to use forms, especially handleInputChange and handleFormSubmit 
//              You may also need to use the filter method during your handleInputChange 