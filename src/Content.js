import { useRef, useState, useEffect } from "react";

function Content(){
    const [count,setCount] = useState(60);

    const ref = useRef();
    const preCount = useRef()

    useEffect(() => {
        preCount.current = count;
    },[count])
    const handleStart = () => {
        ref.current = setInterval(()=>{
            setCount(prevCount => prevCount -1)
        },1000)
    }
    const handleStop=() => {
        clearInterval(ref.current)
    }
    console.log(count,preCount.current)

   

    return(
        <div style={{padding: 20}}>
         <h1>{count}</h1>
         <button onClick={(()=> handleStart())}>Start</button>
         <button onClick={(()=> handleStop())}>Stop</button>
        </div>
    )
}

export default Content;