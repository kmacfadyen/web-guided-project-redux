import { ADD_MEMBER, UPDATE_NEW_MEMBER } from '../actions/dragonListActions';
import { UPDATE_TITLE, TOGGLE_EDITING} from './../actions/titleActions';

export const initialState = {
    newMember: '',
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
        ]
    };
  
const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MEMBER:
      return {
        ...state,
        newMember: action.payload
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload]
      };
    default:
      return state;
  }
};

export default dragonListReducer;