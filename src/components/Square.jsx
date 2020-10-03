import React from "react";

export default function Square({onClick, value, highlightWinner}) {
    const className = "square" + (highlightWinner ? "highlight" : "");
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}
