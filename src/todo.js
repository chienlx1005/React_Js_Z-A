import "./todo.scss";


function Todo({jobs,delJob,editJob}){

    // console.log(jobs)
    const handleDelete =(item) =>{
        delJob(item);

    }
    const handleEdit = (item) =>{
        editJob(item);
    }
    return(
        <>
        <ul>
            {jobs && jobs.length >0 && jobs.map((item,index) => {
                return(
                    <li key={item.id}>{index+1}-{item.name}
                     <button onClick={() => handleEdit(item)} >Edit</button>
                     <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                )
            }) }
        </ul>
        </>
    )
}
export default Todo;