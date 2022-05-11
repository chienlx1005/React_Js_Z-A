import { useState } from "react";
import TypeTodo from "./TypeTodo";
import Todo from "./todo";
function TodoList(){

    const [jobs,setJobs] = useState([
        {
            id: 1,
            name: 'hoc lap trinh'
        },
        {
            id: 2,
            name: 'hoc javascript'
        }

    ])

    const addJob = (job) =>{
        console.log(">>>check prop tu child: ",job)
        if(!job.name && !job.name.length >0){
            alert("khong co du lieu")
            return;
        }
        setJobs((prev) => [...prev,job])
    }
    const delJob = (todo)=>{
        // console.log(id)
        let cuurentJob = jobs;

        cuurentJob = cuurentJob.filter((item) => item.id != todo.id);

        setJobs(cuurentJob);
    }
    const editJob = (todo)=>{
        console.log(">>>check edit item: ",todo)
    }


    return(
        <>
        <TypeTodo addJob = {addJob} editJob={editJob}/>
        <Todo jobs = {jobs} delJob  = {delJob}
            editJob = {editJob}
        />
        </>
    )
}
export default TodoList;