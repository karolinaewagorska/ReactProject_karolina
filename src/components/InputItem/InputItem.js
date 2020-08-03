import React from 'react';
import TextField from "@material-ui/core/TextField";
import styles from "./InputItem.module.css"

const InputItem = () => (<div>
    <TextField
        label="Add New Task:"
        id="margin-dense"
        margin="dense"
        fullWidth
        variant="outlined"
    />   
</div>);

export default InputItem;
