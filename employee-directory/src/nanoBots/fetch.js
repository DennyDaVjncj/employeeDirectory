import React, { useState, useEffect } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function staffScan() {
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
}    
