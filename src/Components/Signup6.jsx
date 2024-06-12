import React from "react";
import Signup6_Left from "./Signup6/Signup6_Left";
import Signup6_Right from "./Signup6/Signup6_Right";

const Signup6=()=>{
    return(
        <div className="flex flex-row w-full">
            <div className="basis-1/2"><Signup6_Left></Signup6_Left></div>
            <div className="basis-1/2"><Signup6_Right></Signup6_Right></div>
        </div>
    );
}
export default Signup6