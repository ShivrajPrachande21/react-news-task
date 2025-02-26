import React from 'react'
import {newsData} from '../Constant/ConstantData'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
const ShowNewsDetails = () => {

    const {id}=useParams()
    const navigate=useNavigate()
    const newData=newsData.find((newsData) =>newsData.id==id)
    console.log(newData,'news')
  return (
    <div className=' w-[100%]  py-4'>
        <div className='flex justify-center items-center'>
        <div className='h-[60vh]  w-[100%] overflow-hidden flex justify-center items-center' >
            <img src={newData.urlToImage} alt="" className=' w-[100%]' />
        </div>
        </div>

        <div className='       p-4 text-[white]'>
            <h1 >Title :<span>{newData.title}</span></h1>
            <p>Description:<span>{newData.description}</span></p>
            <p>Author: <span>{newData.author}</span></p>
            <p>Date: {moment(newData.publishedAt).format("YYYY/MM/DD")}</p>
            <p><a href={newData.url}>got  got news</a></p>
            <button className='bg-[gray] text-[white] mt-4 p-4' onClick={()=>navigate('/')} >Back to Home</button>

    </div>
    
    </div>
  )
}

export default ShowNewsDetails