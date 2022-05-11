import { useState } from "react";

function TypeTodo({addJob,editJob}){
    const [job,setJob] = useState('');

    const handleOnClick = ()=>{
        addJob({
            id:Math.floor(Math.random()*1000),
            name: job
        })
        setJob('');
    }
    const handleEdit =(todo) => {

    }
    return(
       <>
       <p>To do App with Reactjs</p>

       <input value={job} onChange={(e)=> setJob(e.target.value)}/>
       <button onClick={() => handleOnClick()}>Add</button>
       </>
    )
}
export default TypeTodo;