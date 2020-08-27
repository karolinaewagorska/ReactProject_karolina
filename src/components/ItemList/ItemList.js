import React from 'react';
import Item from '../Item/Item';
import styles from "./ItemList.module.css";
import PropTypes from "prop-types";

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
    {items.map((item) => <li key={item.value} className={styles.list}>
        <Item 
            value={item.value} 
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone} 
            onClickDelete={onClickDelete}
        />
    </li>)}
</ul>);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isDone: PropTypes.bool
};

export default ItemList;
