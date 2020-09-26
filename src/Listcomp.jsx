import React, {  useState } from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Listcomp = (props) =>{
    const [line , setLine] =useState(false);
    const cutIt =() =>{
        setLine(true);
    }
    return(
        <div className='todo_style'>
            <span onClick={cutIt}>
                <DeleteOutlineOutlinedIcon fontSize="large"  className='delicon'/>
            </span>
            <li style={{textDecoration:line ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
}

export default Listcomp;