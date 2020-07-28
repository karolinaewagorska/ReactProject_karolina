import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Get new job'} /></li>
    <li><Item todoItem={'Find new friend'} /></li>
    <li><Item todoItem={'Learn new language'} /></li>
</ul>);

export default ItemList;