import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import store from './store';
import {
  addItemAction,
  changeInputValueAction,
  deleteItemAction,
  fetchTodoListAction,
} from './store/actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }

  componentDidMount() {
    const action = fetchTodoListAction();
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    store.dispatch(changeInputValueAction(e.target.value));
  }

  clickButton() {
    store.dispatch(addItemAction());
  }

  deleteItem(index) {
    store.dispatch(deleteItemAction(index));
  }

  render() {
    return (
      <TodoListUI
        inputeValue={this.state.inputeValue}
        changeInputValue={this.changeInputValue}
        clickButton={this.clickButton}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default TodoList;
