import React from 'react';
import Item from '../Item/Item';
import styles from "./ItemList.module.css";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const ItemList = ({ item, onClickDone, onClickDelete, onClickDeleteComplited }) => (
    <div>
        <ul>
            {item.map((item) => <li key={item.value} className={styles.list}>
                <Item 
                    value={item.value} 
                    isDone={item.isDone}
                    id={item.id}
                    onClickDone={onClickDone} 
                    onClickDelete={onClickDelete}
                    />
            </li>)}
        </ul>
        <div>
            <Button 
                variant="contained"
                onClick={ () => onClickDeleteComplited() }
            >
                Clear Completed
            </Button>
        </div>

    </div>
);


ItemList.propTypes = {
    item: PropTypes.array.isRequired
};

export default ItemList;
