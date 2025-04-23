
 import { useState } from "react"
 export function Counter()
{
    let [a,setA]= useState(0)


    return(
        <>
        <h1>{a}</h1>
        <button onClick={()=>setA(a+1)}> Increase</button>
        <button onClick={()=>setA(a-1)}> Decrease</button>
        </>
    )
}