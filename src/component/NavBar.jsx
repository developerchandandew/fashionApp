import { Link } from "react-router-dom";

let NavBar=()=>{
    return (
        <nav className='w-[98%] h-20 fixed bottom-0 z-20 bg-white rounded-t-2xl'>
        <ul className='flex flex-wrap justify-between p-2'>
            <Link to='/home'>
          <li className="bg-gray-300 p-2 rounded-full">
            <span className=' w-8 h-8 bg-black rounded-full'><i class="fa-solid fa-house mx-1 text-white"></i></span>
            Home</li>
            </Link>
          <li>
            <i class="fa-solid fa-cart-shopping  text-2xl mt-2"></i>
            </li>
          <li>
            <i class="fa-solid fa-bell  text-2xl mt-2"></i> 
            </li>
          <li >
            <i class="fa-solid fa-user text-2xl mt-2"></i>
            </li>
        </ul>
      </nav>
    )
}
export default NavBar