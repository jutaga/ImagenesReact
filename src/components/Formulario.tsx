import React from 'react'

export const Formulario = () => {
    return (
        <form>
            <div className='row'>
                <div className='col-md-8 mb-sm-2'>
                    <input placeholder='Search Images, example : soccer or coffee' type="text" className='form-control' />
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-dark w-100'>Search</button>
                </div>
            </div>
        </form>
    )
}
