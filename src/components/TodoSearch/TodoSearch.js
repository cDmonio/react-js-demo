import React from "react";
import './TodoSearch.css'

function TodoSearch()
{
    const onChangeSearchValue = (event) => {
        console.log(event.target.value);
    };

    return (
        <input 
            className="TodoSearch" 
            placeholder="Prueba" 
            onChange={onChangeSearchValue}
        />
    );
}

export { TodoSearch };