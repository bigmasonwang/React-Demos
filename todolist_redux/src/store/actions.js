import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputValueAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

export const fetchTodoListAction = () => {
  return (dispatch) => {
    axios
      .get(
        ' http://mock.51y.cc:81/mock/603b725232adfa0499d3babb/todolist/getList'
      )
      .then((res) => {
        const data = res.data;
        const action = getListAction(data);
        dispatch(action);
      });
  };
};
