import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from "./App.module.css";

const App = () => {
  const items = [
    {
      value: "Create new app"
    },
    {
      value: "Get new job"
    },
    {
      value: "Find new friends"
    },
    {
      value: "Learn new language"
    }
  ];

  return ( 
  <div className={styles.wrap}>
    <h1 className={styles.title}>TO DO LIST</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={4} />
  </div>);
};

export default App;
