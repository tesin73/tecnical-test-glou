import { Form, Button } from "react-bootstrap";
import { useState } from "react";
// export const handleSubmit = async (event) => {
//     const salary = event.target.salary.value
//     const salary2 = event.target.salary2.value
//     console.log(salary, salary2)
// }

// export const salaryexp = document.getElementById('salary')
// export const salary2exp = document.getElementById('salary2')
export const thefnexp = (data) => {(
    <></>
)}
export default function form() {
    // const [salary, setSalary] = useState('')
    // const [gasto, setGasto] = useState('')
    const handleSubmit = async (event) => {
        const data = {
            salary: event.target.salary.value,
            gasto: event.target.gasto.value
        }
        thefnexp(data)
    }
    return (
        <>
            <Form onSubmit={handleSubmit} action='http://localhost:3000/result' style={{ width: '50vw', margin: 'auto', marginBlock: '2rem' }}>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ fontSize: '2rem', fontWeight: 'bold' }}>Saldo</Form.Label>
                    <Form.Control type="text" placeholder="salary" name='salary' id='salary' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '2rem', fontWeight: 'bold' }}>Gasto</Form.Label>
                    <Form.Control type="text" placeholder="gasto" name='gasto' id='gasto' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

