import React,{useState,useEffect} from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function App(){
    const [data,setData]=useSate([])
    const [q,setQ]=useState('')

    useEffect(()=>{
        fetch('https://randomuser.me/')
        .then(response=>response.json())
        .then(json=>setData(json));
    },[]); 
    return(
        <div>
            <div>filter goes here</div>
            <div>data-set here</div>
        </div>
    )        
}