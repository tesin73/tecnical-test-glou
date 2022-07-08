import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";

export default function home(props) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <Row>
                    <a href={props.GoTo} style={{ fontSize: '2rem', fontWeight: 'bold' }}>{props.titleButton}</a>
                    <p style={{ fontSize: '1.5rem' }}>{props.descButton}</p>
                </Row>
            </div>
        </>
    )
}