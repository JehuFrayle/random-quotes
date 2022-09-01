import React, { useContext, useEffect } from "react";
import { QuoteContext } from "./context/QuoteContext";
import './styles/Card.css'

export default function Card() {
    const { quote, person, getQuote, getPerson } = useContext(QuoteContext);
    useEffect(() => { getQuote(); getPerson(); }, []);

    return (
        <div className="Card">
            <img src={person} alt="Person that didn't say" />
            <q>{quote.content}</q>
        </div>
    )
}