import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder='Write Something'
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        ></Input>
        <Button type='primary' onClick={props.clickButton}>
          Add
        </Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          size='small'
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default TodoListUI;
