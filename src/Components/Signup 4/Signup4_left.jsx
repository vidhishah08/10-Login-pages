import React from "react";
import Image5 from "../../Asset/5.png"

const Signup4_left=()=>{
    return(
        <div className=" bg-black/60 w-[900px] px-[70px] pt-[150px] text-white pb-[300px]">
            <p className="text-[48px] font-semibold w-[500px]">Learn to<br/> Mobile And Web Programming!</p>
            <p className="text-[16px] font-light pt-[25px]">Let's learn a new programming language of the future of mankind with unlimited with unlimited technological power.</p>
            <button className="mt-[25px] bg-[#FC8210] py-[8px] px-[10px] flex flex-row rounded-r-full rounded-l-full"><div className="px-[10px] py-[10px] rounded-full bg-white bg-opacity-40 backdrop-blur-lg"><img src={Image5} alt="Image5" className="w-[8px]"/></div><p className="pl-[10px]">Watch Demo</p></button>
        </div>
    );
}

export default Signup4_left