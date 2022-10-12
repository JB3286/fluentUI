import {Label, Stack} from '@fluentui/react';
import React from 'react';
import ToDoItem from "./ToDoItem";

function ToDoList(props: any) {

    const token = {
        childrenGap: 10,
    }

    return (
        <Stack tokens={token}>
            {props.todos.length > 0 ? props.todos.map((todo: any) => (
                <ToDoItem todo={todo} key={todo.id}/>
                )):
                <Label>Nothing to do...</Label>}
        </Stack>
    );
}

export default ToDoList;