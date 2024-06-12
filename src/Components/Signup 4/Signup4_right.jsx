import React from "react";
import Image6 from "../../Asset/6.png";
import Image7 from "../../Asset/7.png";
import Image8 from "../../Asset/8.png";
import Image9 from "../../Asset/9.png";
import Image10 from "../../Asset/10.png"

const Signup4_right=()=>{
    return(
        <div className="mt-[50px] ml-[50px] w-[300px]">
            <p className="text-[36px] font-semibold">Sign in And Learn Our Courses</p>
            <p className="pt-[15px] w-[500px] opacity-50">Create onAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintvelit officia consequent duis enim velit mollit xercitation veniam!e new account?</p>

            <form className="mt-[20px] w-[500px]" >
                <label className="text-[15px] ">E-mail</label><br />
                <div className="flex flex-row mt-[10px] mb-[20px]">
                    <input className="px-[25px] py-[10px] border-black/65 border-[1px] w-[450px] rounded-l-xl border-r-transparent"></input>
                    <div className="py-[10px] border-l-transparent border-black border-[1px] rounded-r-xl pr-[15px]"><img src={Image6} alt="Image6"/></div>
                </div>

                <label className="text-[15px] ">Password</label><br />
                <div className="flex flex-row mt-[10px] mb-[10px]">
                    <input className="px-[25px] py-[10px] border-black/65 border-[1px] w-[450px] rounded-l-xl border-r-transparent"></input>
                    <div className="py-[10px] border-l-transparent border-black border-[1px] rounded-r-xl pr-[15px]"><img src={Image7} alt="Image7"/></div>
                </div>
                <a href="" className="ml-[333px] opacity-55">Forgot my password?</a>

                <button className="text-white bg-[#FC8210] w-full text-center py-[20px] mt-[30px] text-[17px] rounded-xl mb-[30px]">Sign in</button>

                <p className="text-center opacity-55">Or sign in with</p>

                <div className="mt-[20px]">
                    <button className="w-full py-[10px] text-center flex flex-row justify-center border-black border-[1px] rounded-xl"><img src={Image8} alt="Image8"/><h1>Gologolo</h1></button>
                    <div className="mt-[20px] flex flex-row justify-between">
                        <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[80px] rounded-lg ml-[]"><img src={Image9} alt="Image9"/><h1 className="">Marasi</h1></button>
                        <button className="flex flex-row justify-center align-middle border-[1px] border-black/45  py-[20px] px-[70px] rounded-lg"><img src={Image10} alt="Image10"/><h1 className="">Faceboy</h1></button>    
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup4_right;