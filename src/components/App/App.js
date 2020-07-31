import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import "./App.css";

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
  <div className="wrap">
    <h1 className="wrap_title">TO DO LIST</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={4} />
  </div>);
};

export default App;
