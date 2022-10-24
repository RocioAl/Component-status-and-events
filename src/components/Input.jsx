import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const Input = (props) => {
    const writeUser = (e) => {
        props.setUser(e.target.value)
    }
    const writePassword = (e) => {
        props.setPassword(e.target.value)
    }
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa un texto" onChange={writeUser} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control autoFocus type="password" placeholder="Ingresa una contraseña" onChange={writePassword} />
                </Form.Group>

            </Form>
        </>
    )
}

export default Input