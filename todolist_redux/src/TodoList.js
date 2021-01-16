import React from "react";
import "antd/dist/antd.css";
import { Input, Button,List } from "antd";

const TodoList = () => {
  const data = ["Breakfast", "Lunch", "supper"];
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder="Write Something"
          style={{ width: "250px", marginRight: "10px" }}
        ></Input>
        <Button type="primary">Add</Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
};

export default TodoList;
