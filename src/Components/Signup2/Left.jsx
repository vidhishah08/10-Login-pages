import React from "react";
import Logo1 from "../../Asset/Logo1.png"
import Image1 from "../../Asset/8.png"
import Image2 from "../../Asset/9.png"

const Left=()=>{
    return(
        <div className="">
            <div className="flex flex-row  mb-[150px]">
                <img src={Logo1} alt="Polygon1" className="w-[50px]"/>
                <h1 className="text-[24px] font-medium pt-[8px] ">Holiday.</h1>
            </div> 
            <p className="text-[64px] font-semibold ">Login And <br /><span className=" text-[#F6830F]">Explore</span> In My World</p>  
            <p className="text-[24px] opacity-60 w-[750px] pt-[25px]">Explore the world around you with us with comfortable and quality services, let's join immediately and get the benefits.</p>
            <div className="pr-[150px]">
            <div className=" bg-white rounded-3xl px-[80px] py-[60px] mt-[100px] mb-[100px] ">
            <form className="w-[450px]">
                
                <div className="">
                    <label htmlFor="Email" className="opacity-55 ">Email Address</label><br />
                    <input type="text" className="px-[15px] py-[12px] border-[1px] border-black/45 rounded-md w-full mt-[7px]"/>
                </div>
                <div className="mt-[28px]">
                    <label htmlFor="Password" className="opacity-55 ">Password</label><br />
                    <input type="password" className="px-[15px] py-[12px] border-[1px] border-black/45 rounded-md w-full mt-[7px]"/>
                    <button className="mt-[15px] ml-[280px] opacity-70">Forgot my password ?</button>
                </div>
                <button className="w-full text-center rounded-lg mt-[30px] bg-[#F6830F] text-white py-[20px]">Sign in</button>
                <p className="mt-[40px] text-[14px] opacity-55 text-center">Or Sign in with</p>
                <div className="mt-[20px] flex flex-row justify-between">
                    <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[70px] rounded-lg"><img src={Image1} alt="1" className="w-[20px] pt-[2px]"/><h1 className="pl-[10px]  font-medium">Google</h1></button>
                    <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[70px] rounded-lg"><img src={Image2} alt="2" className="w-[20px] pt-[2px]"/><h1 className="pl-[10px]  font-medium">Apple</h1></button>
                </div>
            </form>
        </div>
            </div>
        </div>
    );
}

export default Left;