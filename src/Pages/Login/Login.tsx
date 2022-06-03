import React from 'react';
import { Link } from 'react-router-dom';







const Login = () => {




  return (

    <div className='h-screen flex bg-gray-bg1'>
                
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                  <h1 className='font-bold text-2xl text-center font-Inter italic'>
                     beeps.
                  </h1>

                  <h2 className='text-black-600 pt-2 text-center font-bold text-2xl'>
                   <br />
                   
                  </h2>


                  <form className="space-y-6">


                <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                <div className="mt-1">
                  <input
                    id="email" 
                 
                    
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com"
                  />
                   
                </div>
                </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 bg-indigo-200  border-2 border-black text-black rounded-md shadow-sm text-sm font-medium  hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                <Link to="/resetpassword" > Next </Link> 
                </button>
              </div>

              
       </form>

             </div>

             
    </div>
    
    
  );
}




export default Login;