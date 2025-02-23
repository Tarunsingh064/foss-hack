import React,{useState}from "react";
import logo from "@/assets/logo.png"; 
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-evenly absolute  bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 w-full p-4 ">
      <div className="logo flex gap-2">
        <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} className="brightness-100" />
        <h1 className="font-bold text-xl text-white p-2 brightness-100 font-serif">Harmony</h1>
      </div>


      <div className='hidden md:flex items-center brightness-60'>
        <ul className='flex gap-7'>
          <li className='text-amber-50 text-xl font-bold hover-text-amber-50 font-serif'><Link to="/">Home</Link></li>
          <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/chalanges">Treatment</Link></li>
            <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Meditation">Meditation</Link></li>
<<<<<<< HEAD
          <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Post">community support</Link></li>
=======
          <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Post">Post</Link></li>
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2


        </ul>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-5">
        <li className=' text-xl hover:text-amber-50 text-amber-50 font-bold font-serif'><Link to="/Login">Login</Link></li>
        <li className=' text-xl hover:text-amber-50 text-amber-50 font-bold font-serif'><Link to="/Signup">Register</Link></li>

        </ul>
      </div>

      <button className="md:hidden bg-white" onClick={handleMenu}>
        {isMenuOpen ? <RxCross1 size={24} style={{ background: "none", border: "none", padding: "5px" }}/> : <IoIosMenu  sistyle={{ background: "none", border: "none", padding: "5px" }} size={24}/>}
      </button>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-16 right-0  shadow-lg w-full bg-blue-400 brightness-80 p-6  left-0  z-50`}>
        <ul className='flex flex-col gap-4 p-4'>
        <li className='text-amber-50 text-xl font-bold font-serif'><Link to="/">Home</Link></li>
          <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/chalanges">Treatment</Link></li>
            <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Meditation">Meditation</Link></li>
<<<<<<< HEAD
          <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Post">community support</Link></li>
=======
          <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Post">Post</Link></li>
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
        </ul>

        <ul className="flex flex-col gap-5 p-4">
        <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Login">Login</Link></li>
        <li className=' text-xl hover-text-amber-50 font-bold font-serif'><Link to="/Signup">Register</Link></li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
