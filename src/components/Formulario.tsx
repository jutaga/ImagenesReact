import React, { useState } from 'react'
import { ErrorMsj } from './Error';

interface FormularioProp {
    setBusqueda: React.Dispatch<React.SetStateAction<string>>
}

export const Formulario = ({ setBusqueda }: FormularioProp) => {


    const [word, setWord] = useState('');
    const [error, setError] = useState(false);

    const buscarImagenes = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        //validar campo
        if (word.trim() === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        //Enviar el termino de busqueda hacia el principal
        setBusqueda(word);

    }

    return (
        <form onSubmit={buscarImagenes}>
            <div className='row'>
                <div className='col-md-8 mb-sm-2'>
                    <input onChange={e => setWord(e.target.value)} placeholder='Search Images, example : soccer or coffee' type="text" className='form-control' />
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-dark w-100'>Search</button>
                </div>
            </div>

            {
                error && <ErrorMsj mensaje="Agrega un termino de busqueda" />
            }
        </form>
    )
}
