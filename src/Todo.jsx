import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Listcomp from './Listcomp';

const Todo = () => {
    const [item , setItem] = useState("");

    const [newitem , setNewitem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfitems = () => {
        setNewitem((prevValue)=>{
            return [...prevValue, item];
        });
        setItem("");
    };
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br/>
                        <h1>ToDo List</h1>
                    <br/>
                    <input type='text' value={item} placeholder='Add Your Task' onChange={itemEvent}/>
                    <Button  className='newBtn' onClick={listOfitems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                    
                    {newitem.map((val,index) => {
                        return(

                            <Listcomp key={index} text= {val}/>
                        )
                        })}
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default Todo;