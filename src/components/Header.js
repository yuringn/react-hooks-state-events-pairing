
import React, {useState} from "react";
import Comment from "./Comment";

function Header({title, views, createdAt, upvotes, downvotes, comments }){
    const [up, setUp] = useState(upvotes)
    const [down, setDown] = useState(downvotes)
    const [hide, setHide] = useState(true)
    

    const increase =()=>setUp(up=>up+1) 
    const decrease=()=>setDown(down=> down+1)
    const hideComment=()=>setHide(hide=>!hide)
            
 
    return (
        <header>
            <h1>{title}</h1>
            <p>{views} Views ∕∕ Uploaded {createdAt}</p>
            <button onClick={increase}>{up} 👍🏻 </button>
            <button onClick={decrease}>{down} 👎🏻 </button>
            <br/>
            <br/>
            <button onClick={hideComment}>{hide? "Hide " : "Show " }Comments</button>
            <hr/>
            {hide && < Comment comments ={comments}/>}
            
            
        </header>

    )
}

export default Header;