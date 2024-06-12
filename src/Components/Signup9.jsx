import React from "react";
import Signup9_Right from "./Signup9/Signup9_Right";
import Signup9_Left from "./Signup9/Signup9_Left";

const Signup9=()=>{
    return(
        <div className="flex flex-row">
            <div className=""><Signup9_Left></Signup9_Left></div>
            <div  className="ml-[130px]"><Signup9_Right></Signup9_Right></div>
        </div>
    );
}

export default Signup9;