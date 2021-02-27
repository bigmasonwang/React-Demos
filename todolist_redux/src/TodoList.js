import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());
    this.state = store.getState();
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
          ></Input>
          <Button type='primary'>Add</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            size='small'
            bordered
            dataSource={this.state.list}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
