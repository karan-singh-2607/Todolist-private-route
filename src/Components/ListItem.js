import React from 'react'
import { ListGroup, Col, Button } from 'react-bootstrap'

const ListItem = ({ index, todo, markToDo, unMarkToDo }) => {
    return (
        <ListGroup className="mt-3" >
            <ListGroup.Item variant={todo.isDone ? "success" : "danger"}>{todo.task}</ListGroup.Item>
            <div>
                <Button onClick={() => markToDo(index)} >&#10004;</Button>
                <Button onClick={() => unMarkToDo(index)}>&#10060;</Button>
            </div>
        </ListGroup>
    )
}

export default ListItem