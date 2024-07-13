// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

//   const [modal,setModal] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

// const toggle = ()=>{

//     setModal(!modal)

//      }

  return (
    <div>
    <nav className="bg-white shadow-xl p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className=" text-2xl font-bold text-bold text-zinc-700">DreamJob</a>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>



        <ul className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li className="nav-item">
            <a href="/" className="block text-black py-2 font-serif px-4 animate-pulse">Jobs</a>
          </li>
          {/* <li className="nav-item">
            <a href="/about" className="block text-black font-serif py-2 px-4">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="block text-black font-serif py-2 px-4">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="block text-black font-serif py-2 px-4">Contact</a>
          </li> */}
          <li className="nav-item">
             {/* <button className='bg-black animate-pulse rounded-lg px-2 '> */}
                   {/* <button onClick={toggle} className="block text-white py-2 font-serif px-4">Log in</button></button>   */}
          </li>
        </ul>
      </div>
    </nav>



{/* {
    modal
    && <div>
            <div className='shadow-lg rounded-sm w-1/2 mx-auto h-1/2 sticky'> 
                    <form className='w-1/2 h-1/2 mx-auto '>
                          <label>Email:</label> <br/><input type="text"/>
                               <label>Email:</label> <br/><input type="text"/>
                      <label>Email:</label> <br/><input type="text"/>
              <label>Email:</label> <br/><input type="text"/>
         </form>

</div>
        </div>
                 } */}
    </div>
  );
};

export default Navbar;
