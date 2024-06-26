import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ModelComponent from './Model';

const Model = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <Container>
            <h1>React Bootstrap Model Example</h1>
            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>
            <ModelComponent
                title="Example Modal"
                body="This is the body of the modal."
                showModal={showModal}
                handleClose={handleClose}
            />
        </Container>
    );
};

export default Model;
