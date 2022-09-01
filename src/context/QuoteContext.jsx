import { createContext, useState } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = ({children}) => {
    const [quote, setQuote] = useState({
        content: 'I never said that',
        originator: {
            name: 'Someone',
            url: '#'
        }
    });
    const [person, setPerson] = useState('');

    function getPerson(){
        fetch('https://fakeface.rest/face/json')
        .then(response => response.json())
        .then(response => setPerson(response.image_url))
        .catch(err => console.error(err));
    }
    function getQuote() {
        const {REACT_APP_API_QUOTES_HOST, REACT_APP_API_QUOTES_KEY} = process.env;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':REACT_APP_API_QUOTES_KEY,
                'X-RapidAPI-Host':REACT_APP_API_QUOTES_HOST
            }
        };
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
       .then(response => response.json())
       .then(response => setQuote(response))
       .catch(err => console.error(err));
    }
    return(
        <QuoteContext.Provider value={{quote, person, getPerson, getQuote}}>
            {children}
        </QuoteContext.Provider>
    )
}