import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonUser from 'react-bootstrap/Button';

const Button = ({ disabled = false }) => {
    return (
        <>
            <ButtonUser disabled={disabled} variant="success">Ingresar</ButtonUser>{' '}
        </>
    )
}

export default Button