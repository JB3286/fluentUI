import React, {useState} from 'react';
import './App.css';
import {Stack} from "@fluentui/react";
import ToDoList from "./component/ToDoList";

function App() {

    const[todos,setTodos] = useState([{id:1,name:"ZuckerBrot & Peitsche"},{id:2,name:"Lutschen ist gesund"}]);

    return (
        <div className="wrapper">
            <Stack horizontalAlign="center">
                <h1>Try to get some ToDos</h1>
                <Stack>
                    <ToDoList todos={todos} />
                </Stack>
            </Stack>
        </div>
    );
}
export default App;
