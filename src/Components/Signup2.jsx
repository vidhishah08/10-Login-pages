import React from "react";
import Left from "../Components/Signup2/Left"
import Right from "../Components/Signup2/Right"

const Signup2=()=>{
    return(
        <div className='flex flex-row bg-[#f5f6f8] py-[15px] px-[120px]'>
            <div className='basis-1/2 mr-[20px]'><Left></Left></div>
            <div className='basis-1/2  pt-[15px]'><Right></Right></div>
        </div>
    );
}

export default Signup2;