import React from 'react';







class NewUser extends React.Component {
    render() {
        return (
        

            <div className='h-screen flex bg-gray-bg1'>
                
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='font-bold text-2xl text-center font-Inter font-extrabold italic text-6xl'>
                   beeps.
                </h1>

                <h2 className='text-black-600 pt-2 text-center font-bold text-2xl'>
               Create Your Account <br />
                    
                </h2>

                <div>
      

      
     

      <form className="space-y-6" action="#" method="POST">


      <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Name"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 User email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Phone Number"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Organization Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder=" Organization Name"
                  />
                </div>
              </div>




              

              

              

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 bg-indigo-200  border-2 border-black text-black rounded-md shadow-sm text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>

              
            </form>


    </div>

            
            </div>
        </div>
    );
}
}


export default NewUser;