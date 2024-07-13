// eslint-disable-next-line no-unused-vars
import React,{ useState} from 'react'
import axios from 'axios'
import {FaLocationPin} from 'react-icons/fa6'
const Jobs = () => {

    const [data, setData] = useState([])


      window.onload = () =>{
      axios.get('https://remoteok.com/api')
            .then(response=> setData(response.data))
            .catch(error=>console.log(error))
  
      } 
            
    console.log(data);

 

  return (
    <>
   
<div className="container mx-auto p-4 ">

     <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">


    { data&&
        data.map((item,index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded border cursor-pointer" >

            <h2 className="text-xl  text-center">{item.position}</h2>

            <img src={item.company_logo} className='h-20 w-20 rounded-full mt-3 border-red-500' alt={item.company} />

            <span className='mt-5 text-sm'>{item.slug}</span>

            <p className='text-slate-800 text-sm flex mt-5 mx-auto'><FaLocationPin/>{item.location}</p>

            <p className='mx-auto mt-3'><b className='font-bold '>Annual-salary: </b>${item.salary_min }-${item.salary_max}</p>

            {/* <p>{item.date}</p> */}
            
            {/* <p className="text-gray-700">{item.tags}</p> */}
          </div>
      
 ))}

      
     </div>
</div>

    </>
  )
}

export default Jobs
