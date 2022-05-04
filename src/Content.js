import { useEffect, useState } from "react";

function Content(){
    const [avt,setAvt] = useState();

    useEffect(( ) => {
        return()=> {
            avt && URL.revokeObjectURL(avt.pre)
        }
    },[avt])

    const handleImg = (e) => {

        const file = e.target.files[0]
        file.pre  = URL.createObjectURL(file)

        setAvt(file)
    }

    return(
        <div>
           <input
           type="file"
           onChange={handleImg}
           />
           {avt && (<img src={avt.pre} alt="" width="80%"/>)}
        </div>
    )
}

export default Content;