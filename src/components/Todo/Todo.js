import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import CardContent from "@material-ui/core/CardContent";
import styles from "./Todo.module.css";

const Todo = () => {
  const initialState = {
    item: JSON.parse(localStorage.getItem("item")) || [],
    filter: "all",
    count: JSON.parse(localStorage.getItem("count")) || 0,
    toDo: "",
    error: false,
    errorMessage: "Something went wrong..."
  };

  const [item, setItem] = useState(initialState.item);
  const [count, setCount] = useState(initialState.count);
  const [filter, setFilter] = useState(initialState.filter);
  const [error, setError] = useState(initialState.error);
  const [errorMessage, setErrorMessage] = useState(initialState.errorMessage);

  const onClickDone = (id) => {
    const newItemList = (item.map((item) => {
      const newItem = { ...item };
      if (newItem.id === id) {
        newItem.isDone = !newItem.isDone;
      }
      return newItem;
    })
    );
    setItem(newItemList);
  };

  const onClickDelete = (id) => {
    const newItems = item.filter((item) => item.id !== id);
    setItem(newItems);
    setCount(count - 1)
  };


  const onClickAdd = (value) => {
    const newDict = []
    for (let i in item){
      for (let j in item[i]) {
          newDict.push(item[i][j]);
        }
      };

    if (value === "" || newDict.includes(value)) {
      setError((error) => true);
      setErrorMessage(errorMessage);
    } else {
     const newItems = [
      ...item,
        {
          value,
          isDone: false,
          id: count + 1
        } 
    ];
    setItem(newItems);
    setCount((count) => count + 1);
    }
  };
  
  const onClickDeleteComplited = () => {
    const newItems = item.filter((it) => it.isDone === false);
    setItem(newItems);
  };


  const filterItems = (items, filter) => {
    if (filter === "all") {
      return items;
    } else if (filter === "active") {
      return items.filter((item) => !item.isDone);
    } else if (filter === "done") {
      return items.filter((item) => item.isDone);
    }
  };

  const onFilterChange  = (filter) => {
    setFilter(filter);
  };

  const searchItem = (item) => {
    let res = item.filter((item) => !item.isDone);
    return res.length;
  };
    const addItemToLocalStorage = (item, count) => {
      let sItem = JSON.stringify(item);
      localStorage.setItem("item", sItem);
      localStorage.setItem("count", JSON.stringify(count));
    };

    addItemToLocalStorage(item, count);
    const visibleItems = filterItems(item, filter);
    let activeItem = searchItem(item);

    return (
        <CardContent>
            <h1 className={styles.title}>TO DO LIST</h1>
            <Footer 
              todo={activeItem}
              onFilterChange={onFilterChange}
              filter={filter}
              count={item.filter((it) => it.isDone===false).length} 
            />
            <InputItem 
              onClickAdd={onClickAdd} 
              error={error}
              errorMessage={errorMessage}
              item={item}
            />
            <ItemList
              onClickDone={onClickDone} 
              onClickDelete={onClickDelete}
              item={visibleItems}
              onClickDeleteComplited={onClickDeleteComplited}
            />
            
        </CardContent>);
};

export default Todo;
