import React, { useEffect, useState } from "react";
import './styles/Card.css'

export default function Card() {
    const [quote, setQuote] = useState('');
    const [person, setPerson] = useState('');

    function getFace(){
        fetch('https://fakeface.rest/face/json')
        .then(response => response.json())
        .then(response => setPerson(response.image_url))
        .catch(err => console.error(err))
    }
    function getQuote() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '22abfa6981msh775849b32286a0dp1665a9jsn0138c7d0b360',
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        };
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
       .then(response => response.json())
       .then(response => setQuote(response.content))
       .catch(err => console.error(err))
    }
    useEffect(() =>{getQuote(); getFace()}, [])
    
    return (
        <div className="Card">
        <img src={person} alt="Person that didn't say" />
        <q>{quote || 'I never said that'}</q>
        </div>
    )
}