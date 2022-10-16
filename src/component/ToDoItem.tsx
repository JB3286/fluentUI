import React from 'react';
import {Label, Stack} from '@fluentui/react';

function ToDoItem(props: any){

    return(
        <Stack>
            <Stack horizontal verticalAlign={"center"} horizontalAlign={"space-between"}>
                <Label>{props.todo.name}</Label>
            </Stack>
        </Stack>
    );
}

export default ToDoItem;