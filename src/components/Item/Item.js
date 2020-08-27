import React from 'react';
import classnames from "classnames";
import styles from "./Item.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PropTypes from "prop-types";

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
    <ListItem>
        <Checkbox 
            checked={isDone}
            onClick={() => onClickDone(id)}
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
            <DeleteRoundedIcon 
                onClick={() => onClickDelete(id)}
            /> 
        </ListItemSecondaryAction>
    </ListItem>);

Item.propTypes = {
    value: PropTypes.string,
    isDone: PropTypes.bool
}

export default Item;
