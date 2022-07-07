import React from 'react'
import { useState } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import InputItem from '../Components/InputItem';
import ListItem from '../Components/ListItem';
import { isLogin, logout } from '../Routes/isLogin';

const TodoList = () => {

    const [Login, setLogin] = useState(isLogin = true)
    const [ToDos, setToDos] = useState([
        {
            task: 'Go to market',
            isDone: false
        }
    ])
    const handleLogout = () => {
        logout()
        setLogin(isLogin = false)
    }
    const addToDo = task => {
        const newToDos = [...ToDos, { task }]
        setToDos(newToDos)
    }
    const markToDo = index => {
        const newToDos = [...ToDos]
        newToDos[index].isDone = true;
        setToDos(newToDos)
    }
    const unMarkToDo = index => {
        const newToDos = [...ToDos]
        newToDos.splice(index, 1)
        setToDos(newToDos)
    }
    console.log(ToDos)
    return (

        <div className="App">
            <div className='d-flex justify-content-end mx-3 mt-3'>
                <Button onClick={() => handleLogout()} >Logout</Button>
            </div>

            <div className="TodolistContainer mt-3">
                <h3 className="d-flex justify-content-center" >Todo List</h3>
                <Row >
                    <InputItem addToDo={addToDo} />
                </Row>

                <Row className='mt-5'>
                    <Col md={{ span: 5, offset: 4 }} >
                        {ToDos.map((todo, index) => (
                            <ListItem
                                key={index}
                                index={index}
                                todo={todo}
                                markToDo={markToDo}
                                unMarkToDo={unMarkToDo}
                            />
                        ))}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TodoList