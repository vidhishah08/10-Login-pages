import React from "react";
import Image9 from "../../Asset/9.png"
import Image8 from "../../Asset/8.png"
import Image6 from "../../Asset/6.png"
import Image7 from "../../Asset/7.png"


const Signup6_Left=()=>{
    return(
        <div className="mx-[150px] mt-[70px] py-[20px]  ">
            <p className="text-[38px] font-semibold">Explore In The World</p>
            <p className="text-[16px] opacity-55 pt-[15px]">lets's vacation now with tickets from us at affordable prices and also reliable friendly and best services also prioritizes customer comfort and safety with strict health protocols</p>
            <div className="flex flex-row mt-[50px]">
                <button className="flex flex-row justify-center py-[20px] px-[15px] border-[1px] border-black rounded-xl mr-[30px]"><div><img src={Image9} alt="image9"/></div><div><h1>Sign in with Faceboy</h1></div></button>
                <button className="flex flex-row justify-center py-[20px] px-[15px] bg-[#F5F6F8]"><div><img src={Image8} alt="image8"/></div><div><h1>Sign in with Marasi</h1></div></button>
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
            <button className="mt-[50px] w-full py-[15px] text-center text-white rounded-xl bg-[#0E918C]">Sign in</button>
            
            <div className="mt-[80px] text-center opacity-55"><p>New here? <a className="text-[#0E918C] opacity-100">Create an account</a></p></div>

        </div>

            
    );
}
export default Signup6_Left;