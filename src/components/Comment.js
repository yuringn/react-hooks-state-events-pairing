import React from "react";
import ButtonComment from "./ButtonComment";

function Comment({comments}){
    const commentDetail = comments.map(comment=> {
        return (
            <>
            
            <main key={comment.comment.id}>
                
                <h3>{comment.user}</h3>
                <ButtonComment comment={comment.comment}/>
            </main>
            </>
        )
    })
    return (
        <>
        {commentDetail}
        </>
    )
}

export default Comment;