import React from 'react';
import classnames from "classnames";
import styles from "./Item.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Item = ({ value, isDone, onClickDone }) => (
    <ListItem>
        <Checkbox 
            onClick={() => onClickDone(isDone)}
        />
        <div className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>  
            {value}
        </div>
        <ListItemSecondaryAction>
            <DeleteRoundedIcon /> 
        </ListItemSecondaryAction>
    </ListItem>);

export default Item;
