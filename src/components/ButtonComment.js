import React from "react";

function ButtonComment({comment}){
    
    return (
        <>
        <p>{comment}</p>
        <button>{0} Up Vote</button> <button>{0} Down Vote </button>
        </>
    )
}

export default ButtonComment;