import React from 'react';
import Item from '../Item/Item';
import styles from "./ItemList.module.css";
import Button from "@material-ui/core/Button";

const ItemList = ({ onClickDone, onClickDelete, filterItems, onClickDeleteComplited, onClickDeleteAll }) => (
    <div>
        <ul>
            { filterItems().map((item) => <li key={item.value} className={styles.list}>
                <Item 
                    value={item.value} 
                    isDone={item.isDone}
                    id={item.id}
                    onClickDone={onClickDone} 
                    onClickDelete={onClickDelete}
                    />
            </li>)}
        </ul>
        <div className={styles.buttons}>
            <Button 
                variant="contained"
                className={styles.button}
                onClick={ () => onClickDeleteComplited() }
            >
                Clear Completed
            </Button>
            <p className={styles.space}></p>
            <Button 
                variant="contained"
                className={styles.button}
                onClick={ () => onClickDeleteAll() }
            >
                Clear All
            </Button>
        </div>
    </div>
);

export default ItemList;
