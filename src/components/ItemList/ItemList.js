import React from 'react';
import Item from '../Item/Item';
import styles from "./ItemList.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";


const ItemList = ({ items }) => (<ul>
    {items.map((item) => <li classname={styles.item} key={item.value}>
        <div classname={styles.checkbox}>
            <Checkbox />
        </div>
        <Item 
            value={item.value} 
            isDone={item.isDone} />  
        <div className={styles.deleted}>
            <DeleteRoundedIcon />   
        </div>
    </li>)}
</ul>);

export default ItemList;
