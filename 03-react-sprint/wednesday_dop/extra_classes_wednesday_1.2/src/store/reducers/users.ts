import {createUser} from 'store/actions';
import {UserType} from 'types';

const initState = {
  users: [] as UserType[],
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof createUser>;

export const usersReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  debugger
  switch (action.type) {
    case 'СREATE_USER':
      debugger
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};


