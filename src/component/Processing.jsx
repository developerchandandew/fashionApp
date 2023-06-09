import {useState,useEffect} from 'react';
import { FadeLoader } from 'react-spinners';
import Received from './Received';
let Processing=()=>{
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },10000)
    },[])
    return (
        
        <div className="processing w-full h-[100vh] flex justify-center items-center bg-[#fdf3f9]">          
            {
                    loading?
                    <div className="text-center">                     
                         <FadeLoader color='purple' loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"  className='m-auto'/>
                        <h1 className="font-semibold text-lg">Payment is Processing...</h1>
                        <p>Please wait,do not close the screen</p>
                    </div>:
                    <Received/>
            }

            
        </div>
    )
}
export default Processing