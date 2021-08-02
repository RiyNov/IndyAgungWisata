import {CHANGE_HEADER_TITLE} from './GlobalAction';

const initialState = {
  headerTitle: 'Test Title 1',
};

export const GlobalReducer = (state = initialState, action) => {
  // return state;

  switch (action.type) {
    case CHANGE_HEADER_TITLE:
      return {
        ...state,
        headerTitle: action.value,
      };

    default:
      return state;
  }
};
