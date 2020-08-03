import React from 'react';
import TextField from "@material-ui/core/TextField";
import styles from "./InputItem.module.css"

const InputItem = () => (<div className={styles.text}>
    <TextField
        label="Add New Task:"
        id="margin-dense"
        margin="dense"
    />   
</div>);

export default InputItem;
