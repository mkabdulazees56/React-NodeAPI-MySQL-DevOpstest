import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, UNSAFE_enhanceManualRouteObjects } from 'react-router-dom';
import { deletSTD, showSTD } from '../api/api'

const Show = () => {
  const [records, setRecords] = useState([]);
  
  const fetchData = async () => {
    await showSTD().then((res) => {
      setRecords(res.data)
    })
  }
  
  useEffect(() => {
    fetchData();
  },[]);

  const onDeleteSTD = async (id) => {
    await deletSTD(id);
    window.location.reload();
  }

  // console.log(records);
  return (
    <>
      <div className='grid items-center justify-items-center gap-3 max-w-7xl w-full ml-auto mr-auto mt-11'>
        <div className='text-lime-500 flex items-center gap-5 px-3 py-2 w-full rounded ring-1 ring-gray-800 bg-black'>
        <div className='grid items-center'><h1>ID</h1></div>
              <div className='grid items-center w-5/12'><h1>Name!!</h1></div>
              <div className='grid items-center w-6/12'><h1>Email</h1></div>
              <div className='grid items-center w-6/12'><h1>Work</h1></div>
              <div className='flex items-center justify-between w-5/12'>
                <h1>Actions</h1>
                <Link to={'/create'}><button type='button' className='button-theme'>Create Updated</button></Link>
              </div>
        </div>
        {records?.map((val, i) => (
          <div className='text-white flex items-center gap-5 px-3 py-2 w-full rounded ring-1 ring-gray-800 bg-black' key={i}>
            <div className='flex items-center justify-start gap-5 w-full'>
              <div className='grid items-center'><h1>{val.id}</h1></div>
              <div className='grid items-center w-5/12'><h1>{val.name}</h1></div>
              <div className='grid items-center w-6/12'><h1>{val.email}</h1></div>
              <div className='grid items-center w-6/12'><h1>{val.work}</h1></div>
              <div className='grid items-center w-6/12'><img src={val.imgname} alt='imgname' className='border border-red-500 w-14 h-14 rounded-full' /></div>
            </div>
            <div className='flex items-center justify-center gap-5'>
              <Link to={`/edit/${val.id}`}><button type='button' className='button-theme'>Edit</button></Link>
              <button type='button' onClick={()=> onDeleteSTD(val.id)} className='button-theme border-rose-500 text-rose-500 hover:shadow-rose-500'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Show
