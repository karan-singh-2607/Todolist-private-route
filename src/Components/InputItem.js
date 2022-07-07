import React, { useState } from 'react'
import { InputGroup, Form, Button, Col } from 'react-bootstrap'

const InputItem = ({ addToDo }) => {

    const [Value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Value) return;
        addToDo(Value)
        setValue("")
    }

    return (
        <Col md={{ span: 5, offset: 4 }} >
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Add List</Form.Label>
                    <Form.Control type='text' className='input' placeholder='Add new todo' value={Value} onChange={e => setValue(e.target.value)} />
                </Form.Group>
                <Button type='submit' >Add</Button>
            </Form>
        </Col>
    )
}

export default InputItem