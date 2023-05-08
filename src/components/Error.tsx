
interface ErrorProp {
    mensaje: string;
}

export const ErrorMsj = ({ mensaje }: ErrorProp) => {
    return (
        <div className="alert alert-dark">{mensaje}</div>
    )
}
