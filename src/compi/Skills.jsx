 import React, { useState } from "react"
 import { useNavigate } from "react-router-dom";

 const Skills = () => {
     const navigate=useNavigate()
     const skill=()=>{
        navigate('/skill')
     }
     const Personal=()=>{
        navigate('/personal')
     }
  return (
    <div className="flex flex-col md:flex-row md:justify-around md:p-[25px] md:border-2 md:border-red-500">
        <button onClick={()=>{skill()}} className="text-white bg-gray-800 text-[40px] rounded-3xl shadow-2xl border-2 border-red-500 py-10 px-[100px] m-10 hover:italic hover:font-semibold hover:shadow-inner ">Skills</button> 
        <button onClick={()=>{Personal()}}  className="text-white bg-gray-800  text-[40px]  rounded-3xl shadow-2xl border-2 border-red-500 py-10 px-[100px] m-10 hover:italic hover:font-semibold hover:shadow-inner">Personal Information</button>
    </div>
  )
}
export {Skills}