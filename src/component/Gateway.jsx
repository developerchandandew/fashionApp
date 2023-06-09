import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
let Geteway=()=>{
    const [input,setInput] = useState({cardNumber:'',personName:'',exDate:'',code:''});
    const [error,setError] = useState();
    const navigate = useNavigate();
    const inputHandle=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }
    const submitHande=(e)=>{
        e.preventDefault();
        navigate('/process')
    }
    return (
        <div className="geteway bg-[#fdf3f9] w-full h-[100vh]">
            <form className="w-4/5 m-auto pt-10">
                <div className="form-control">
                    <label htmlFor="">Card number</label>
                    <div className="flex justify-between bg-white border-2 border-black p-2 rounded-md">
                    <input type="text" name='cardNumber'  className="w-4/5 bg-transparent outline-none" onChange={inputHandle}/>
                    <img src="src/images/mestro.png" alt="card" className="w-8 h-8"/>
                    </div>
                </div>

                <div className="form-control mt-4">
                    <label htmlFor="">Name Of Card</label>
                    <input type="text" name='personName'  className="w-full bg-transparent outline-none  bg-white border-2 border-black p-2 rounded-md " onChange={inputHandle}/>
                </div>

                <div className="multiple flex justify-between mt-4">

                        <div className="form-control w-[45%]">
                            <label className="block">Expiration Date</label>
                            <input type="text" name='exDate'  className="w-full bg-transparent outline-none  bg-white border-2 border-black p-2 rounded-md" onChange={inputHandle}/>
                        </div>

                        <div className="form-control w-[45%]">
                            <label className="block">Security Code <i class="fa-solid fa-question bg-black text-white rounded-full inline-flex justify-center items-center w-5 h-5"></i></label>
                            <input type="text" name='code'  className="w-full bg-transparent outline-none  bg-white border-2 border-black p-2 rounded-md" onChange={inputHandle}/>
                        </div>
                </div>
                <button className="w-full bg-pink-600 rounded-md p-2 text-white my-6" onClick={submitHande}><i className="fa-solid fa-lock "></i> Pay Now</button>

            </form>
        </div>
    )
}
export default Geteway
