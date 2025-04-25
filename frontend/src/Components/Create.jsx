import React from 'react';
import useForm from '../hooks/useForm';
import Inputs from './Inputs';
import { createSTD } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { inputState, handleOnchange } = useForm();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, work, imgname } = inputState;
        await createSTD({ name, email, work, imgname });
        console.log(inputState)
        navigate('/', {replace: true})
    }
  return (
    <>
        <div className='app-container'>
            <form className='max-w-xl w-full m-auto flex flex-col gap-9 rounded-lg ring-1 ring-gray-900 shadow-md shadow-black/25 bg-black/30 p-7' onSubmit={handleSubmit}>
                <Inputs type={'text'} label={'Name'} name={'name'} placeholder={'Jhon Doe'} value={inputState.name} onChange={handleOnchange} />
                <Inputs type={'email'} label={'Email'} name={'email'} placeholder={'email@example.com'} value={inputState.email} onChange={handleOnchange} />
                <Inputs type={'text'} name={'work'} label={'Work'} placeholder={'Developer'} value={inputState.work} onChange={handleOnchange} />
                <Inputs type={'file'} label={'Image'} name={'imgname'} placeholder={'Drop a File'} value={inputState.imgname} onChange={handleOnchange} />
                <button type='submit' className='button-theme'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Create