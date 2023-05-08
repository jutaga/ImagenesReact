import { Data } from "../interface/Api.interface"

interface ImagenProp {
  imagen: Data
}

export const Imagen = ({ imagen }: ImagenProp) => {

  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col-xl-2 col-md-4 col-sm-6">
      <div className="card mb-3">
        <img className="card-img-top " height={'200px'} src={previewURL} alt={tags} />
        <hr />
        <div className="card-body ">
          <h5 className="card-title">{tags}</h5>
          <p className="card-text">{likes}  Likes - {views} Vistas</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-dark w-100" href={largeImageURL} rel="noopener noreferrer" target="_blank">Ver Más</a>
        </div>
      </div>
    </div>

  )
}
