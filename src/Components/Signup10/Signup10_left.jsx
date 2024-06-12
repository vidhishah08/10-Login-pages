import React from "react";
import Image10 from "../../Asset/10.png"
import Image11 from "../../Asset/15.png"

const Signup10_Left=()=>{
    return(
        
        <div className="mt-[60px] mx-[70px] w-[700px] border-[1px] border-black rounded-xl px-[50px] py-[50px] mb-[60px]">
            <div className="text-center">
                <p className="text-[48px] font-bold">Sign in Now!</p>
                <p className="text-[16px] pt-[12px]">Style according to your style and get interesting tips about lifestyle that is modern and contemporary.</p>
                <button className=" py-[15px] text-center w-full flex flex-row justify-center mt-[30px] bg-[#0E49B5]"><div></div><img src={Image10} alt="Image10"/><div className="ml-[8px]"><h1>Sign in with Faceboy</h1></div></button>
            </div>
            <div className="mt-[50px] w-full">
                <hr />
                <div className="px-[5px] text-[14px] opacity-55 ml-[270px] mt-[-12px] bg-white w-[30px] "><p>Or</p></div>     
            </div>

            <form>               
                <div className="mt-[50px]">
                    <label htmlFor="Email" className="opacity-55  ">E-mail</label><br />
                    <input type="text" className="px-[15px] py-[12px] border-[1px] border-black rounded-xl w-full mt-[7px] bg-[#F5F6F8]"/>
                </div>
                <div className="mt-[28px]">
                    <label htmlFor="Password" className="opacity-55 ">Password</label><br />
                    <div className="flex flex-row mt-[7px]">
                        <input type="password" className="px-[15px] py-[12px] border-[1px] border-black/45 rounded-l-xl w-full  border-r-transparent"/>
                        <div className="border-black/55 border-[1px]  border-l-transparent rounded-r-xl py-[12px] px-[4px]"><img src={Image11} alt="Image15"/></div>
                    </div>    
                    <button className="mt-[5px] ml-[250px] opacity-70">Forgot my password ?</button>
                </div>
                <button className="w-full text-center rounded-lg mt-[30px] bg-[#FF7171] text-white py-[15px]">Sign in</button>
                
            </form>
            <div className="text-center mt-[100px]"><p className="">Don't have an account yet?<a className="text-[#1B52F4]">Create an account</a></p></div>
        </div>
        
    );
}

export default Signup10_Left;