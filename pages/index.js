import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { mpages } from '../public/mpages.png'
import ButtonSelect from '../component/ButtonsSelect'
export default function Home() {
  return (<>
    <h1 style={{ textAlign: 'center' }}>Seleccione la modalidad</h1>
    <div style={{ justifyContent: 'center', display: 'flex', marginBlock: '4rem' }}>
      <Row><Col>
        <ButtonSelect textButton='Pagina de formulario la cual muestra los resultados en una segunda pagina'></ButtonSelect>
        <ButtonSelect textButton='Pagina de formulario y resultados en una sola pagina'></ButtonSelect>
      </Col></Row>
    </div>
  </>
  )
}
