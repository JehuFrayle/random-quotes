import React, { useContext } from "react";
import { QuoteContext } from "../context/QuoteContext";
import "../styles/AuthorCard.css"

export const Author = () => {
    const {quote} = useContext(QuoteContext)
    return(
        <details closed>
            <summary>Who said it then?</summary>
            <a href={quote.originator.url} target='blank'>{quote.originator.name}</a>
        </details>
    )
}