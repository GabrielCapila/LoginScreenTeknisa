import {RepositoriesState, Repository, RepositoriesTypes} from './types';
import {Reducer} from 'redux';
const INITIAL_STATE: RepositoriesState = {
  repositories: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  console.log('type',action.type)
  console.log('payload',action.payload)
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return {...state, loading: true};
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        repositories: action.payload,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {...state, loading: false, error: true, data: []};
      default:
          return state;
  }
};
export default reducer;
