import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from "./App.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class App extends React.Component {
  state = {
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
    ]
  };

  onClickDone = (id) => {
    const newItemList = (this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    })
    );
    this.setState({ items: newItemList });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>TO DO LIST</h1>
            <InputItem />
            <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
            <Footer count={4} />
          </CardContent>
        </Card>
      </div>);
    }
}

export default App;
