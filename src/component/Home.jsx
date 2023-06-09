import { Link } from "react-router-dom"
let Home=()=>{
    return (
        <div className="home w-full h-full p-2 ">
            <div className="w-[90%] flex justify-between m-auto mt-5  ">
                <span className="cursor-pointer bg-black text-white rounded-full flex items-center justify-center p-2 w-10 h-10 mt-5"><i class="fa-solid fa-bars-staggered"></i></span>
                <span className="cursor-pointer bg-gray-200 text-white rounded-full"><img src="src/images/icons/profile.png" alt="" /></span>
            </div>
            <div className="w-[90%] m-auto mt-8">
                <h1 className="font-bold text-xl">Welcome,</h1>
                <h2 className="text-gray-300 font-semibold text-lg">Our Fashion App</h2>
            </div>
            <div className="w-[90%] m-auto flex justify-between mt-6">
                <div className="w-[70%] bg-gray-200 p-3 rounded-full flex justify-between">
                <i className="fa-solid fa-magnifying-glass mx-3 mt-1"></i>
                <input type="search" placeholder="Search" className="bg-transparent outline-none "/>
                </div>

                <span className="cursor-pointer bg-black text-white rounded-full flex items-center justify-center p-2 w-11 h-11 "><i class="fa-solid fa-bars-staggered"></i></span>
            </div>

            {/* discount */}
            <div className="w-full flex flex-nowrap flex-row overflow-x-auto space-x-10  mt-10">
                <div className="bg-[url('src/images/image.png')] min-w-[85%] bg-cover rounded-2xl ml-[5%] p-4">
                    <p className="font-bold text-2xl">50% Off</p>
                    <h1 className="font-semibold text-lg">On everything today</h1>
                    <p className="mt-4 text-gray-600">With code: FSCREATION</p>
                    <button className="mt-3 bg-black text-white font-bold rounded-full p-3 px-6">Get Now</button>
                </div>

                <div className="bg-[url('src/images/image.png')] min-w-[85%] bg-cover rounded-2xl p-4">
                    <p className="font-bold text-2xl">50% Off</p>
                    <h1 className="font-semibold text-lg">On everything today</h1>
                    <p className="mt-4 text-gray-600">With code: FSCREATION</p>
                    <button className="mt-3 bg-black text-white font-bold rounded-full p-3 px-6">Get Now</button>
                </div>

                <div className="bg-[url('src/images/image.png')] min-w-[85%] bg-cover rounded-2xl p-4">
                    <p className="font-bold text-2xl">50% Off</p>
                    <h1 className="font-semibold text-lg">On everything today</h1>
                    <p className="mt-4 text-gray-600">With code: FSCREATION</p>
                    <button className="mt-3 bg-black text-white font-bold rounded-full p-3 px-6">Get Now</button>
                </div>
                
            </div>
                {/* product  */}
                <div className="w-4/5 m-auto">

                <div className="flex justify-between mt-10">
                        <h1 className="font-bold text-xl">New Arrivals</h1>
                        <h3 className="text-gray-600">View All</h3>
                 </div>
                </div>
                
                <div className="w-full ml-10% mb-24">
                    

                    <div className="w-full flex flex-nowrap flex-row overflow-x-auto   mt-10 ">
                        <div className="min-w-[50%] p-2 text-center relative ">
                            <Link to='/product'>
                            <img src="src/images/bag.png" alt="product" className="rounded-xl"  />
                            <span className="absolute top-4 right-12 bg-black flex items-center justify-center p-2 w-6 h-6 rounded-full"><i class="fa-regular fa-heart text-white text-sm"></i></span>
                            <h1 className="mt-3 font-semibold">The Marc Jacobs</h1>
                            <h5 className="text-gray-600">Traveler Tote</h5>
                            <h4 className="font-semibold">$195.00</h4>
                            </Link>
                        </div>

                        <div className="min-w-[50%] p-2 text-center relative ">
                            <Link to='/product'>
                            <img src="src/images/shoe.png" alt="product" className="rounded-xl"  />
                            <span className="absolute top-4 right-12 bg-black flex items-center justify-center p-2 w-6 h-6 rounded-full"><i class="fa-regular fa-heart text-white text-sm"></i></span>
                            <h1 className="mt-3 font-semibold">The Marc Jacobs</h1>
                            <h5 className="text-gray-600">Traveler Tote</h5>
                            <h4 className="font-semibold">$195.00</h4>
                            </Link>                            
                        </div>
 

                        <div className="min-w-[50%] p-2 text-center relative ">
                            <Link to='/product'>
                            <img src="src/images/bag.png" alt="product" className="rounded-xl"  />
                            <span className="absolute top-4 right-12 bg-black flex items-center justify-center p-2 w-6 h-6 rounded-full"><i class="fa-regular fa-heart text-white text-sm"></i></span>
                            <h1 className="mt-3 font-semibold">The Marc Jacobs</h1>
                            <h5 className="text-gray-600">Traveler Tote</h5>
                            <h4 className="font-semibold">$195.00</h4>
                            </Link>
                        </div>

                        <div className="min-w-[50%] p-2 text-center relative ">
                            <Link to='/product'>
                            <img src="src/images/shoe.png" alt="product" className="rounded-xl"  />
                            <span className="absolute top-4 right-12 bg-black flex items-center justify-center p-2 w-6 h-6 rounded-full"><i class="fa-regular fa-heart text-white text-sm"></i></span>
                            <h1 className="mt-3 font-semibold">The Marc Jacobs</h1>
                            <h5 className="text-gray-600">Traveler Tote</h5>
                            <h4 className="font-semibold">$195.00</h4>
                            </Link>
                        </div>
                    </div>
                </div>


        </div>
    )
}
export default Home 