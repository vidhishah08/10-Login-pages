import React from "react";
import Signup5_Right from "./Signup5/Signup5_Right";
import Signup5_Left from "./Signup5/Signup5_left";

const Signup5=()=>{
    return(
        <div className="flex flex-row mb-[100px]">
            <div className=""><Signup5_Left></Signup5_Left></div>
            <div className=""><Signup5_Right></Signup5_Right></div>
        </div>
    );
}

export default Signup5