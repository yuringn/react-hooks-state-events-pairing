
import React, {useState} from "react";
import Comment from "./Comment";

function Header({title, views, createdAt, upvotes, downvotes, comments }){
    
    const [up, setUp] = useState(upvotes)
    const [down, setDown] = useState(downvotes)
    const [hide, setHide] = useState(true)
    const [search, setSearch] =useState("")
    const filterComment = comments.filter(comment=> comment.user.toLowerCase().includes(search.toLowerCase()))
    
    const increase =()=>setUp(up=>up+1) 
    const decrease=()=>setDown(down=> down+1)
    const hideComment=()=>setHide(hide=>!hide)
    const handleSearch=(e)=>setSearch(e.target.value) 
    
 
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
            <input onChange={handleSearch} type ="text" placeholder ="Search..." />
            {hide && <h2>{comments.length} Comments</h2>}
            {hide && < Comment comments ={filterComment}/>}
            
            
        </header>

    )
}

export default Header;