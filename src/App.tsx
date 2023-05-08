import { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario'
import { Data, Imagenes } from './interface/Api.interface';
import { ListadoImagenes } from './components/ListadoImagenes';

export const App = () => {

  const [busqueda, setBusqueda] = useState('');
  const [apiResult, setApiResult] = useState<Data[]>([]);

  useEffect(() => {

    const consultarApi = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const API_KEY = '30830727-96dbe881beaad6146392ad01c'
      const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(API_URL);
      const resultado: Imagenes = await respuesta.json();

      setApiResult(resultado.hits);
    }

    consultarApi();

  }, [busqueda])



  return (
    <>
      <div className='container-fluid bg-secondary-subtle p-5 mb-2'>
        <div className='text-center'>
          <p>Search Images</p>
          <Formulario setBusqueda={setBusqueda} />
        </div>
      </div>
      <div className='container-fluid'>
        <ListadoImagenes imagenes={apiResult} />
      </div>

    </>
  )
}
