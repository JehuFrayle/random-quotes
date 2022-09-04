import React, { useContext } from "react";
import { QuoteContext } from "../context/QuoteContext";
import "../styles/AuthorCard.css"

export const Author = () => {
    const { quote } = useContext(QuoteContext)
    return (
        <details>
            <summary>Who said it then?</summary>
            <p>This was said by <a href={quote.originator.url} target='blank'>{quote.originator.name}</a></p>
        </details>
    )
}