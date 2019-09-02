import { GET_LIST, POST_TODO, PUT_TODO, DELETE_TODO } from './actionTypes'
import Axios from 'axios';

export const getListCreator = () => {
    return (dispatch) => {
        Axios
            .get('https://www.easy-mock.com/mock/5d5cb265f39c7a20e25b9224/reactBasic/todolist')
            .then(response => {
                const value = response.data.data;
                const action = {
                    type: GET_LIST,
                    value
                }
                dispatch(action)
            })
    }
}

export const putTodoCreator = (value) => {
    return {
        type: PUT_TODO,
        value
    }
}


export const postTodoCreator = () => {
    return {
        type: POST_TODO
    }
}


export const deleteTodoCreator = (value) => {
    return {
        type: DELETE_TODO,
        value
    }
}

