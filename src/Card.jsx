import React, { useEffect, useState } from "react";
import './styles/Card.css'

export default function Card() {
    const [quote, setQuote] = useState('');
    const [person, setPerson] = useState('');

    function getFace(){
        fetch('https://fakeface.rest/face/json')
        .then(response => response.json())
        .then(response => setPerson(response.image_url))
        .catch(err => console.error(err));
    }
    function getQuote() {
        const {REACT_APP_API_QUOTES_HOST, REACT_APP_API_QUOTES_KEY} = process.env
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':REACT_APP_API_QUOTES_KEY,
                'X-RapidAPI-Host':REACT_APP_API_QUOTES_HOST
            }
        };
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
       .then(response => response.json())
       .then(response => setQuote(response.content))
       .catch(err => console.error(err));
    }
    useEffect(() =>{getQuote(); getFace();}, []);
    
    return (
        <div className="Card">
        <img src={person} alt="Person that didn't say" />
        <q>{quote || 'I never said that'}</q>
        </div>
    )
}