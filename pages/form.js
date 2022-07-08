import { Form, Button } from "react-bootstrap";
import { useState } from "react";

//LO QUE DEBO PASAR


export default function form() {
    const handleSubmit = async (event) => {
        const data = {
            salary: event.target.salary.value,
            gasto: event.target.gasto.value
        }
    }
    return (
        <>
            <Form onSubmit={handleSubmit} action='http://localhost:3000/result' style={{ width: '50vw', margin: 'auto', marginBlock: '2rem' }}>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ fontSize: '2rem', fontWeight: 'bold' }}>Saldo</Form.Label>
                    <Form.Control type="text" placeholder="salary" name='salary' id='salary' />
                    {/* pasar este input de name salary*/}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '2rem', fontWeight: 'bold' }}>Gasto</Form.Label>
                    <Form.Control type="text" placeholder="gasto" name='gasto' id='gasto' />
                    {/* y este input de name gasto*/}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

