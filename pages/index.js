import ButtonSelect from '../component/ButtonsSelect'
import { Card, Button, Row, Col } from 'react-bootstrap';
//AQUI NO
export default function Home() {
  return (<>
    <h1 style={{ textAlign: 'center' }}>Seleccione la modalidad</h1>
    <div style={{ justifyContent: 'center', display: 'flex', marginBlock: '4rem' }}>
      <Row><Col>
        <ButtonSelect GoTo='http://localhost:3000/form' titleButton='Pagina de formulario la cual muestra los resultados en una segunda pagina'
          descButton='uwu'></ButtonSelect>

        <ButtonSelect GoTo='https://www.w3schools.com/tags/tag_a.asp' titleButton='Pagina de formulario y resultados en una sola pagina'
          descButton='uwu'></ButtonSelect>
      </Col></Row>
    </div>
  </>
  )
}
