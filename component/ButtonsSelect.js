import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import { mpages } from '../public/mpages.png'

export default function home(props) {
    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex', margin: '2rem' }}>
                <Row><Col>
                    <p style={{ fontSize: '2rem' }}>{props.textButton}</p>
                    <Button variant="primary" size="lg">button</Button>
                </Col></Row>
            </div>
        </>
    )
}