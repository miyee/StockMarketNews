import React from 'react'
import TextField from '@material-ui/core/TextField';

export const SearchBar = ({setStock, stock, pressEnter}) => {
    return (
        <TextField
                id="standard-name"
                label="Stock "
                margin="normal"
                value={stock}
                onKeyDown={pressEnter}
                onChange={e => setStock(e.target.value)}
        />
    )
}