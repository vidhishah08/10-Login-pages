import React from "react";
import Image6 from "../Asset/6.png"
import Image7 from "../Asset/7.png"
import Image4 from "../Asset/4.png"
import Image9 from "../Asset/9.png"
import Image12 from "../Asset/12.png"


const Signup8=()=>{
    return(
        <div className="bg-[#AAAAAA] w-full py-[100px]">
            <div className="bg-white py-[40px] px-[50px] w-[600px] ml-[920px] ">
            <div className=" ml-[470px] mt-[-10px] mb-[10px] "><img src={Image12} alt="Image12"/></div>
            <p className="text-[38px] font-semibold">Sign in Now!</p>
            <p className="text-[16px] opacity-55 pt-[15px]">Let's vacation right now with tickets from us at affordable prices and also trusted,friendly service and the best</p>
            <div className="flex flex-row mt-[50px]">
                <button className="flex flex-row justify-center py-[20px] px-[25px] border-[1px] border-black rounded-xl mr-[30px]"><div><img src={Image4} alt="imagey"/></div><div><h1>Sign in with Twiwiwi</h1></div></button>
                <button className="flex flex-row justify-center py-[20px] px-[25px] bg-[#F5F6F8]"><div><img src={Image9} alt="image9"/></div><div><h1>Sign in with Marasi</h1></div></button>
            </div>

            <div className="mt-[50px] w-full">
                <hr />
                <div className="px-[5px] text-[14px] opacity-55 ml-[200px] mt-[-12px] bg-white w-[100px] "><p>Or sign in with</p></div>     
            </div>

            <div className="mt-[30px]">
                        <label className="text-[14px] opacity-55 pb-[10px]">Email Address</label><br />
                        <div className="flex flex-row mt-[10px] mb-[18px]">
                            <div className="px-[5px] py-[10px] border-black/65 border-[1px] rounded-l-xl border-r-transparent "><img src={Image6} alt="Image6"/></div>
                            <input className="py-[10px] border-black/65 border-[1px] border-l-transparent w-full rounded-r-xl px-[15px]"></input>
                        </div>

                        <label className="text-[14px] opacity-55 pb-[10px]">Password</label><br />
                        <div className="flex flex-row mt-[10px]">
                            <div className="px-[5px] py-[10px] border-black/65 border-[1px] rounded-l-xl border-r-transparent "><img src={Image7} alt="Image7"/></div>
                            <input type="password" className="py-[10px] border-black/65 border-[1px] border-l-transparent w-full rounded-r-xl px-[15px]"></input>
                        </div>
                        <p className="text-[14px] opacity-55 pt-[5px] ml-[338px]"><a>Forgot my password?</a></p>
            </div>
            <button className="mt-[50px] w-full py-[15px] text-center text-white rounded-xl bg-[#F6830F]">Sign in</button>
            
            <div className="mt-[80px] text-center opacity-55"><p>Don't have an account yet? <a className="text-[#F6830F] opacity-100">Create an account</a></p></div>

            </div>
            
        </div>
    );
}

export default Signup8;