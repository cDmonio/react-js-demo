import React from "react";
import './TodoSearch.css'

function TodoSearch({ search, setSearch })
{
    const onChangeSearchValue = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    return (
        <input 
            className="TodoSearch" 
            placeholder="Prueba"
            value={search}
            onChange={onChangeSearchValue}
        />
    );
}

export { TodoSearch };