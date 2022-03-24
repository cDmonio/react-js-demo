import React from "react";
import './TodoSearch.css'

function TodoSearch()
{
    //REACT HOOK
    const [search, setSearch] = React.useState('');

    const onChangeSearchValue = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    return [
        <input 
            className="TodoSearch" 
            placeholder="Prueba"
            value={search}
            onChange={onChangeSearchValue}
        />,
        <p>{search}</p>
    ];
}

export { TodoSearch };