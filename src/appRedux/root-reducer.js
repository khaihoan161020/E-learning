import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Auth from "./Auth/reducers";
import Common from "./Common/reducers";
import Setting from "./Setting/reducers";
import User from "./User/reducers";
import Vocab from "./Vocab/reducer"
import Read from "./Reading/reducer"


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    settings: Setting,
    auth: Auth,
    common: Common,
    user: User,
    vocab: Vocab,
    read: Read,
  });
  
  export default createRootReducer


// export default combineReducers((history) => {
//     router: connectRouter(history),
//     Auth,
//     Notes,
//     Contact,
//     Common,
//     Setting

// })