import React from "react";
import Image1 from "./Asset/1.png"
import Image2 from "./Asset/2.png"
import Image3 from "./Asset/3.png"
import Image4 from "./Asset/4.png"

const Form=()=>{
    return(
        <div className="bg-[#666666] py-[100px] px-[500px]">
            <div className="bg-white w-[500px] py-[30px] px-[30px] rounded-3xl">
                <p className="text-[32px] font-semibold">Scool.co</p>
                <p className="text-[28px] font-semibold">Welcome Back To School</p>
                <p className="opacity-60 pt-[13px]">Come on,go to school here and get extensive knowledge</p>
                <form className="mt-[50px]">
                    <label className="text-[14px] opacity-75 ">Email Address</label><br />
                    <input className="w-full py-[10px] px-[10px] border-[1px] border-black/55 rounded-xl mt-[8px] mb-[20px]"></input>

                    <label className="text-[14px] opacity-75">Password</label>
                    <button className="text-[14px] text-[#0779e4] ml-[237px]">Forgot my password?</button>
                    <input className="w-full py-[10px] px-[10px] border-[1px] border-black/55 rounded-xl mt-[8px] mb-[28px]"></input>

                    <input type="checkbox" className="mb-[36px]"></input>
                    <label className="ml-[15px]">Remember this device</label><br></br>

                    <button className="text-center py-[10px] bg-[#0779e4] text-white w-full rounded-xl mb-[36px]">Sign In</button>

                    <p className="text-center w-full opacity-55">Or sign in with</p>
                    <div className="flex flex-row justify-center mt-[10px] mb-[20px]">
                        <div className="px-[4px] py-[4px] rounded-full border-black/35 border-[1px] mr-[10px]"><img src={Image1} alt="Image1"/></div>
                        <div className="px-[4px] py-[4px] rounded-full border-black/35 border-[1px] mr-[10px]"><img src={Image2} alt="Image2"/></div>
                        <div className="px-[4px] py-[4px] rounded-full border-black/35 border-[1px] mr-[10px]"><img src={Image3} alt="Image3"/></div>
                        <div className="px-[4px] py-[4px] rounded-full border-black/35 border-[1px] mr-[10px]"><img src={Image4} alt="Image4"/></div>
                    </div>

                    <p className="text-center w-full opacity-55">New here? <a href="" className="text-[#0779e4]">Create an account</a></p>
                </form>
            </div>
        </div>
        
    );
}

export default Form;