import React from "react";
import Signup7_Right from "./Signup7/Signup7_Right";
import Signup7_Left from "./Signup7/Signup7_Left";


const Signup7=()=>{
    return(
        <div className="flex flex-row">
            <div className="basis-1/2"><Signup7_Left></Signup7_Left></div>
            <div className="basis-1/2"><Signup7_Right></Signup7_Right></div>
        </div>
    );
}
export default Signup7;
