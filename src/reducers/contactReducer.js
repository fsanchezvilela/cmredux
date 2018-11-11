// import actions
import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';

const initialState = {
  contacts: [],
  contact: {} // show the 1 contact view, if we have a show page this is the object single contact
};

export default function(state = initialState, action) {
  switch (action.type) {
    //show all contacts
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    //Edit contact
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    //DELETE CONTACT
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    //ADD CONTACT
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    //UPDATE CONTACT
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };

    //DEFAULT STATE
    default:
      return state;
  }
}
