import React from 'react';
import classnames from "classnames";
import styles from "./Item.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PropTypes from "prop-types";

class Item extends React.Component {

    componentDidMount() {
        console.log("component Did Mount");
    };

    componentDidUpdate() {
        console.log("component Did Update");
    };

    componentWillUnmount() {
        console.log("component Will Unmount");
    };

    render() {
        const { value, isDone, onClickDone, id, onClickDelete } = this.props;

        return (
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
    }
};

Item.propTypes = {
    value: PropTypes.string,
    isDone: PropTypes.bool
};

export default Item;
