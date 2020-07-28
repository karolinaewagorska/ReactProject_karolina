import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';

const todoItem = 'Create new app'

const App = () => ( <div>
  <h1>TO DO LIST</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={4} />
</div>
);

export default App;



