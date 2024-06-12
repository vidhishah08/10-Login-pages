import React from "react";
import Left from "../Components/Signup1/Left"
import Right from "../Components/Signup1/Right"

const Signup1=()=>{
    return(
        <div className=" font-sans flex flex-row">
        <div className='basis-1/2'><Left></Left></div>
        <div className='basis-1/2'><Right></Right></div>
    </div>
    );
}

export default Signup1;