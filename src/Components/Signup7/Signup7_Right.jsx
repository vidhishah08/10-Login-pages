import React from "react";
import Image10 from "../../Asset/10.png"
import Image9 from "../../Asset/9.png"
import Image11 from "../../Asset/15.png"

const Signup7_Right=()=>{
    return(
        <div className="my-[100px] mx-[100px]">
            <form>
               
                <p className="text-[48px] font-bold pt-[20px] text-center">Sign in</p>
                
                <div className="mt-[90px]">
                    <label htmlFor="Email" className="opacity-55  ">E-mail</label><br />
                    <input type="text" className="px-[15px] py-[12px]  rounded-xl w-full mt-[7px] bg-[#F5F6F8]"/>
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
                <p className="mt-[40px] text-[14px] opacity-55 text-center">Or Sign in with</p>
                <div className="mt-[20px] flex flex-row justify-between">
                    <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[70px] rounded-lg mr-[40px]"><img src={Image10} alt="1"/><h1 className="">Faceboy</h1></button>
                    <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[70px] rounded-lg"><img src={Image9} alt="2"/><h1 className="">Marasi</h1></button>
                </div>
            </form>
            <div className="text-center mt-[80px]"><p className="">Don't have an account yet?<a className="text-[#FF7171]">Create an account</a></p></div>
        </div>
    );
}

export default Signup7_Right;