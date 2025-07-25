import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Triangle } from 'react-loader-spinner'
import axios from 'axios'
export default function SpecificBrands() {
  const [specific, setSpecific] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let {id}= useParams()
  console.log(id)

  async function SpecificBrands(id){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/` + id)
    // setDetails(data.data)
    // console.log(data.data)
    setSpecific(data.data)
    setIsLoading(false)
  }
  useEffect(()=>{
    SpecificBrands(id)
  },[ SpecificBrands])
  return (
    <>
    {isLoading? <div className='loading d-flex align-items-center justify-content-center'>
         <Triangle
          visible={true}
          height="80"
          width="80"
          color="var(--main-color)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""/> </div>: 
    <div className="container mt-5 pt-3">
    <div className="card card-details mb-3">
  <div className="row g-0 position-relative">
    <div className="col-md-4 position-relative">
    <img src={specific.image} alt={specific.image} className='w-100' />
    </div>
    <div className="col-md-8 d-flex align-items-center">
      <div className="card-body">
        <p className="fw-bolder text-main top-0 end-0 position-absolute rounded-0 badge fs-6 bg-main text-light">{specific.slug}</p>
        <h1 className="card-title fw-bolder text-center">{specific.name}</h1>
       
      </div>
    </div>
  </div>
</div>
    </div>
   }
    </>
  )
}
