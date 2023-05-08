import { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario'
import { Data, Imagenes } from './interface/Api.interface';
import { ListadoImagenes } from './components/ListadoImagenes';

export const App = () => {

  const [busqueda, setBusqueda] = useState('');
  const [apiResult, setApiResult] = useState<Data[]>([]);
  const [paginaActual, setpaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {

    const consultarApi = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const API_KEY = '30830727-96dbe881beaad6146392ad01c'
      const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(API_URL);
      const resultado: Imagenes = await respuesta.json();

      setApiResult(resultado.hits);

      const calcularPaginas = Math.ceil(resultado.totalHits / 30);
      setTotalPaginas(calcularPaginas);

      //Mover la pantalla hacia arriva
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron?.scrollIntoView({ behavior: 'auto' })

      localStorage.setItem('previousSearch', busqueda);

    }
    consultarApi();

  }, [busqueda, paginaActual])

  useEffect(() => {
    const ultimaBusqueda = localStorage.getItem('previousSearch');

    if (ultimaBusqueda) {
      setBusqueda(ultimaBusqueda);
    }


  }, []);



  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if (paginaActual === 1) {
      return;
    }
    setpaginaActual(nuevaPaginaActual);

  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if (paginaActual === totalPaginas) {
      return;
    }
    setpaginaActual(nuevaPaginaActual);
  }

  return (
    <>
      <div className='container-fluid jumbotron bg-secondary-subtle p-5 mb-2'>
        <div className='text-center'>
          <p className='lead text-dark'>Search Images</p>
          <Formulario setBusqueda={setBusqueda} />
        </div>
      </div>
      <div className='container-fluid'>
        <ListadoImagenes imagenes={apiResult} />

        {
          apiResult.length > 0
          &&
          <div className='d-flex justify-content-center g-3 mb-2'>

            <button disabled={paginaActual <= 1} onClick={paginaAnterior} className='btn btn-dark mx-1' type='button'> &laquo; Previous</button>
            <button disabled={paginaActual === totalPaginas} onClick={paginaSiguiente} className='btn btn-dark mx-1' type='button'>Next &raquo;</button>          </div>
        }

      </div>

    </>
  )
}
