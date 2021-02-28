import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    store.subscribe(this.storeChange);
  }

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    const action = {
      type: 'todo/changeInput',
      value: e.target.value,
    };
    store.dispatch(action);
  }

  clickButton() {
    const action = {
      type: 'todo/addItem',
    };
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = {
      type: 'todo/deleteItem',
      index,
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder='Write Something'
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          ></Input>
          <Button type='primary' onClick={this.clickButton}>
            Add
          </Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            size='small'
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
