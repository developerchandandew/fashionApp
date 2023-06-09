let Received=()=>{
    return (
        <div className="received w-full h-[100vh] flex justify-center items-center bg-[#fdf3f9]">
            <div className="text-center ">
                <span className="w-12 h-12 flex justify-center items-center border-2 border-green-500 rounded-full m-auto"><i class="fa-solid fa-check text-green-500 text-lg"></i></span>
                <h1 className="font-semibold text-xl mt-8">Payment Received!</h1>
                <p className="w-4/5 m-auto">Your Order is now on the way,Please check your Email for the receipt</p>
            </div>
        </div>
    )
}
export default Received 