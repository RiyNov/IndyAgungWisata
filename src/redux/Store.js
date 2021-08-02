import {createStore} from 'redux';
import {GlobalReducer} from './GlobalReducer';

const Store = createStore(GlobalReducer);

export default Store;
