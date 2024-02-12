export default Idiomas
function Idiomas({lista}) {
    return (
        <div>
          <p><strong>Lengua materna: </strong>Castellano</p> 
          <p><strong>Segunda lengua: </strong>Ingles Basico</p>
          {lista.map((e, key) => {
                return <p key={key}><strong>lengua extra: </strong>{e}</p>
                 })}
        </div>
    )
}