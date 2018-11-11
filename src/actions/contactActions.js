//import the npm boys and stuff
import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from './types';
import axios from 'axios';

//calling the type

//SHOW ALL CONTACTS ROUTE
export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

//EDIT ROUTE
export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

//DELETE ROUTE
//como no tenemos backend entonces usamos try y catch para forzar borrar el contacto del dom
export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

//ADD ROUTE
export const addContact = contact => async dispatch => {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/users',
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
