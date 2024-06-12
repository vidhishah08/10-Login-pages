import React from "react";
import Image1 from "../../Asset/10.png"
import Image2 from "../../Asset/9.png"

const Right=()=>{
    return(
        <div className="my-[100px] mx-[100px]">
            <form>
                <h1 className="opacity-55">Welcome back,</h1>
                <p className="text-[48px] font-bold pt-[20px]">Sign in to Travelic.</p>
                <button className="opacity-55 mt-[20px]">Create one new account ?</button>
                <div className="mt-[90px]">
                    <label htmlFor="Email" className="opacity-55 ">Email Address</label><br />
                    <input type="text" className="px-[15px] py-[12px] border-[1px] border-black/45 rounded-md w-full mt-[7px]"/>
                </div>
                <div className="mt-[28px]">
                    <label htmlFor="Password" className="opacity-55 ">Password</label><br />
                    <input type="password" className="px-[15px] py-[12px] border-[1px] border-black/45 rounded-md w-full mt-[7px]"/>
                    <button className="mt-[15px] ml-[380px] opacity-70">Forgot my password ?</button>
                </div>
                <button className="w-full text-center rounded-lg mt-[30px] bg-[#0E49B5] text-white py-[20px]">Sign in</button>
                <p className="mt-[40px] text-[14px] opacity-55 text-center">Or Sign in with</p>
                <div className="mt-[20px] flex flex-row justify-between">
                    <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[90px] rounded-lg"><img src={Image1} alt="1"/><h1 className="">Faceboy</h1></button>
                    <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[90px] rounded-lg"><img src={Image2} alt="2"/><h1 className="">Marasi</h1></button>
                </div>
            </form>
        </div>
    );
}
export default Right;