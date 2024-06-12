import React from "react";
import Image6 from "../../Asset/6.png"
import Image7 from "../../Asset/7.png"
import Image8 from "../../Asset/8.png"
import Image9 from "../../Asset/9.png"
import Image10 from "../../Asset/10.png"
import Image4 from "../../Asset/4.png"


const Signup5_Right=()=>{
    return(
        <div className="mx-[100px]">
            <div className="flex flex-row pt-[30px]">
                <div className="flex flex-row justify-between mr-[70px]">
                    <p className="pl-[28px]" >Home</p>
                    <p className="pl-[28px]">About us</p>
                    <p className="pl-[28px]">Features</p>
                </div>
                <div className="flex flex-row justify-center mt-[-7px]">
                    <button className="mr-[25px]">Sign in</button>
                    <button className="bg-[#0779E4] text-center py-[10px] px-[25px] text-white rounded-xl ">Register</button>
                </div>
            </div>
            <div className="mt-[60px] px-[60px]">
                <div>
                    <p className="opacity-55 text-[16px]">Welcome Back,</p>
                    <p className="text-[36px] font-bold pt-[20px]">Sign in to Ngendong</p>
                    <p className="opacity-55 pt-[20px] text-[16px]"><a>Create one new account?</a></p>
                </div>
                
                <form className="">
                    <div className="mt-[30px]">
                        <label className="text-[14px] opacity-55 pb-[10px]">Email Address</label><br />
                        <div className="flex flex-row mt-[10px] mb-[18px]">
                            <div className="px-[5px] py-[10px] border-black/65 border-[1px] rounded-l-xl border-r-transparent "><img src={Image6} alt="Image6"/></div>
                            <input className="py-[10px] border-black/65 border-[1px] border-l-transparent w-full rounded-r-xl"></input>
                        </div>

                        <label className="text-[14px] opacity-55 pb-[10px]">Password</label><br />
                        <div className="flex flex-row mt-[10px]">
                            <div className="px-[5px] py-[10px] border-black/65 border-[1px] rounded-l-xl border-r-transparent "><img src={Image7} alt="Image7"/></div>
                            <input type="password" className="py-[10px] border-black/65 border-[1px] border-l-transparent w-full rounded-r-xl"></input>
                        </div>
                        <p className="text-[14px] opacity-55 pt-[5px] ml-[235px]"><a>Forgot my password?</a></p>
                    </div>
                    <button className="mt-[50px] w-full py-[15px] text-center text-white rounded-xl bg-[#0779E4]">Sign in</button>

                    <div className="mt-[50px] mx-[60px]">
                        <hr />
                        <div className="px-[5px] text-[14px] opacity-55 ml-[70px] mt-[-12px] bg-white w-[100px] "><p>Or sign in with</p></div>    
                    </div>

                    <div className="flex flex-row justify-center mt-[20px] w-full ml-[-12px]">
                        <div className="py-[4px] px-[4px] ml-[10px] border-black border-[1px] rounded-lg"><img src={Image8} alt="Image8"/></div>
                        <div className="py-[4px] px-[4px] ml-[10px] border-black border-[1px] rounded-lg"><img src={Image9} alt="Image9"/></div>
                        <div className="py-[4px] px-[4px] ml-[10px] border-black border-[1px] rounded-lg"><img src={Image10} alt="Image10"/></div>
                        <div className="py-[4px] px-[4px] ml-[10px] border-black border-[1px] rounded-lg"><img src={Image4} alt="Image4"/></div>   
                    </div>
                </form> 
            </div>
        </div>
    );
}

export default Signup5_Right