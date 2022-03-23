import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props)
{
    //Guardo el onclick en una función
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('SOY UN MENSAJE CLICKADO')}
        >
        +
        </button>
    );
}

export { CreateTodoButton };