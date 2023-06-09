import { Data } from "../interface/Api.interface"

interface ImagenProp {
  imagen: Data
}

export const Imagen = ({ imagen }: ImagenProp) => {

  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className=" animate__animated animate__fadeIn col-xl-2 col-md-4 col-sm-6">
      <div className="card mb-3">
        <img className="card-img-top" height={'200px'} src={previewURL} alt={tags} />
        <hr />
        <div className="card-body ">
          <p className="card-text">{likes}  Likes - {views} Views</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-dark w-100" href={largeImageURL} rel="noopener noreferrer" target="_blank">See More...</a>
        </div>
      </div>
    </div>

  )
}
