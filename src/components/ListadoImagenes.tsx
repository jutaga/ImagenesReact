import { Data } from "../interface/Api.interface"
import { Imagen } from './Imagen';

interface ListadoProp {
    imagenes: Data[]
}


export const ListadoImagenes = ({ imagenes }: ListadoProp) => {

    return (
        <>
            <div className="row">
                {
                    imagenes.map((imagen: Data) => (
                        <Imagen key={imagen.id} imagen={imagen} />
                    ))
                }
            </div>
        </>
    )
}
