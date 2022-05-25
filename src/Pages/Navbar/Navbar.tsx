import React from 'react'
import { BiSearch } from 'react-icons/bi';

import { BsFillCaretDownFill, BsGear } from "react-icons/bs";





export const Navbar = () => {
  return (
    <nav className="p-3 w-full items-center bg-black md:flex md:items-center md:justify-between ">
        <div>
            <span className="text-white font[inter] font-bold italic border-2 border-white outline-4 rounded sm:px-4 md:px-3">
                beeps
            </span>
        </div>

        <ul className="md:flex md:items-center">

            <li className="px-2 md:flex md:items-center">
                <a href="#" className="text-m hover:text-red-600 duration-500 text-white px-1"> Benutzer</a>
                
                <div className="md:flex md:items-center">

                    <li className="relative md:cursor-pointer group">
                        
                        <a href="#" className="text-white text-m items-center "> <BsFillCaretDownFill/> </a>

                        

                      <div className=" absolute top-10">
                          <ul className="absolute bg-white px-3.5 hidden group-hover:block hover:block ">

                          <div className="py-0">
                            <div></div>
                        </div>
                              <li>
                                  <a href="#" className="text-black text-m items-center">Profile</a>
                              </li>

                              <li>
                                  <a href="#" className="text-black text-m items-center">Logout</a>
                              </li>
                          </ul>
                      </div>

                    </li>

                
                    

                </div>
                
                
                
                
            </li>

            

            <li className="px-4">
                <a href="#" className="text-white text-xl items-center"> <BiSearch/> </a>
            </li>

            

            <li className="px-4">
                <a href="#" className="text-white text-l items-center"> <BsGear/> </a>
            </li>
            
        </ul>
    
    
   
    
    </nav>
    
    )
    
    }
    
    
    
    export default Navbar