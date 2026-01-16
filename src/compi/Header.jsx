import React, { useState } from "react"
import { NavLink } from "react-router"
import taha from '../../public/taha.jpg'
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex flex-col md:flex-row justify-between font-bold italic  border-2 border-red-300 bg-gray-900 text-white ">
            <div className="mx-10 pt-2 text-[50px] hover:text-zinc-300 hover:font-semibold">
                Welcome to Sayyed Empire !
            </div>
            <div className="flex ">
                <ul className="flex">
                    <li className="mx-3 pt-5 text-[24px]"><NavLink className="hover:bg-slate-200 p-3 rounded-md hover:text-black" to="/Home">Home</NavLink></li>
                    <li className="mx-3 pt-5 text-[24px]"><NavLink className="hover:bg-slate-200 p-3 rounded-md hover:text-black" to="/About">About me</NavLink></li>
                    <li className="mx-3 pt-5 text-[24px]"><NavLink className="hover:bg-slate-200 p-3 rounded-md hover:text-black" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div>  <img
        src={taha}
        alt="Taha Sayyed"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-indigo-400 cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={taha}
            alt="Taha Sayyed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )} </div>
        </div>
    )
}