import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Create, Edit, Show } from './Components';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Show />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App