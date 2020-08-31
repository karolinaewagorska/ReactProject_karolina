import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from "./App.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const App = () => {
  const initialState = {
    items: [
      {
        value: "Create new app",
        isDone: true,
        id: 1
      },
      {
        value: "Get new job",
        isDone: false,
        id: 2
      },
      {
        value: "Find new friends",
        isDone: true,
        id: 3
      },
      {
        value: "Learn new language",
        isDone: false,
        id: 4
      }
    ],
    count: 4,
    error: false
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [error, setError] = useState(initialState.error);

  useEffect(() => {
    console.log("componentDidUpdate"); /* eslint-disable-line no-console */
  });

  useEffect(() => {
    console.log("componentDidMount"); /* eslint-disable-line no-console */
  }, []);

  const onClickDone = (id) => {
    const newItemList = (items.map((item) => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    })
    );
    setItems(newItemList);
  };

  const onClickDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setCount((count) => count - 1);
  };


  const onClickAdd = (value) => {
    if (value === "") {
      setError((error)=> true)
    } else {
     const newItems = [
      ...items,
        {
          value,
          isDone: false,
          id: count + 1
        } 
    ];
    setItems(newItems);
    setCount((count) => count + 1);
    }
  };
  
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>TO DO LIST</h1>
            <InputItem 
              onClickAdd={onClickAdd} 
              error={error}
            />
            <ItemList 
              items={items} 
              onClickDone={onClickDone} 
              onClickDelete={onClickDelete}
            />
            <Footer 
              count={count} 
            />
          </CardContent>
        </Card>
      </div>);
};

export default App;
