import { useState } from 'react'
import './App.css'
import Foto from './componets/Foto'
import Perfil from './componets/Perfil'
import Idiomas from './componets/Idiomas'
import Intereses from './componets/Intereses'
import Empleo from './componets/Empleo'
import Experiencia from './componets/Experiencia'
import Educacion from './componets/Educacion'
import Mostrar from './componets/Mostrar'
import Habilidades from './componets/Habilidades'

function App() {

  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState('');
  const [visible, setVisible] = useState(true);

  const añadir = () => {
    setLista([...lista, texto]);
  };

  const ver = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className='container'> 
        <div className='datos'>
          <Foto />
          <h2 className='centrar'>Perfil</h2>
          <hr />
          <Perfil />
          <h2 className='centrar'>Habilidades</h2>
          <hr />
          <Mostrar onClick={ver} visible={visible} />
          {visible && <Habilidades lista={lista} />}
          
          <input type='text' onChange={(e) => setTexto(e.currentTarget.value)} />
          <button className='btn' onClick={añadir}><i class="fa-solid fa-circle-plus fa-xl"></i></button>
          
          <h2 className='centrar'>Idiomas</h2>
          <hr />
          <Mostrar onClick={ver} visible={visible} />
          {visible && <Idiomas lista={lista} />}
          
          <input type='text' onChange={(e) => setTexto(e.currentTarget.value)} />
          <button className='btn' onClick={añadir}><i class="fa-solid fa-circle-plus fa-xl"></i></button>

          <h2 className='centrar'>Intereses</h2>
          <hr />
          <Intereses />
        </div>
        <div className='info'>
          <h1>CONZA HAQUEHUA PAOLO LUCIO</h1>
          <Empleo />
          <Experiencia />
          <Educacion />
        </div>
      </div>
    </>
  )
}

export default App
