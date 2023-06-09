import { useEffect } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
let Product = () => {
    const [count,setCount] = useState(1)
    const price = 198;
    let total = count*price;

    return (
        <div className="product w-full h-full relative">
        <div className="relative w-full border-2 z-0">
            <img src="src/images/imagepro.png" className="w-full" alt="por" />
            <Link to='/home'>
            <span className="bg-black absolute top-[6.9%] left-[8.8%] rounded-full p-1 flex justify-center items-center w-10 h-10 "><i className="fa-solid fa-arrow-left text-white"></i></span>
            </Link>
            <span className="bg-white absolute top-[7.51%] right-[11.15%] bottom-[92.49%] rounded-full p-1 flex justify-center items-center w-10 h-10"><i class="fa-solid fa-bag-shopping text-black"></i></span>
            <span className="bg-white absolute  right-[9.56%] bottom-[10%] rounded-full p-1 flex justify-center items-center w-12 h-12"><i class="fa-solid fa-heart text-black"></i></span>
        </div>
        <div className="second w-full  bg-white p-4 rounded-t-3xl -pt-12 absolute top-[93%]">
            {/* roller */}
            <div className="flex justify-between ">
                <div className="right">
                    <h3>Roller Rabbit</h3>
                    <h5>Vado Odelle Dress</h5>
                    <h5><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i> <span>(320 Review)</span></h5>
                </div>

                <div className="left">
                    <div className="count flex justify-between p-4 bg-gray-300 rounded-full">
                    <button onClick={()=>setCount(() => count-1)} disabled={count <= 0}>-</button>
                    <h3>{count  > -1? count : 0}</h3>
                    <button onClick={()=>setCount(() => count+1)}>+</button>
                    </div>
                    <h4 className="mt-2 font-bold">Availble in Stock</h4>
                </div>

            </div>

            {/* size */}
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Size</h2>
                <div className="w-full flex">
                    <button className="bg-gray rounded-full flex items-center justify-center p-2 border-gray-500 border-2 w-10   h-10  m-3 focus:bg-black focus:text-white">S</button>
                     <button className="bg-gray rounded-full flex items-center justify-center p-2 border-gray-500 border-2 w-10 h-10 m-3 focus:bg-black focus:text-white">M</button>
                     <button className="bg-gray rounded-full flex items-center justify-center p-2 border-gray-500 border-2 w-10 h-10 m-3 focus:bg-black focus:text-white">L</button> 
                     <button className="bg-gray rounded-full flex items-center justify-center p-2 border-gray-500 border-2 w-10 h-10 m-3 focus:bg-black focus:text-white">XL</button>
                      <button className="bg-gray rounded-full flex items-center justify-center p-2 border-gray-500 border-2 w-10 h-10 m-3 focus:bg-black focus:text-white">XXl</button>
                </div>
            </div>

            {/* discription */}
            <div>
                <h2 className="font-bold text-xl">Description</h2>
                <p className="text-gray-400 text-xs mt-5">Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
            </div>

            <div className="last w-full flex justify-between mb-20">
                <div className="total w-[30%]">
                    <h4>Total price</h4>
                    <h2 className='font-bold'>${total > -1 ? total : 0}.00</h2>
                </div>
              <button className="w-[50%] p-2 bg-black text-white rounded-full">
                <Link to='/geteway'>
                Buy Now

                </Link>
                </button>

            </div>
        </div>
    </div>
    );
};
export default Product


