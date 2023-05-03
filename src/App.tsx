import React from 'react'
import { Formulario } from './components/Formulario'

export const App = () => {
  return (
    <>
      <div className='container bg-secondary-subtle p-5'>
        <div className='text-center'>
          <p>Search Images</p>
          <Formulario />
        </div>
      </div>
    </>
  )
}
