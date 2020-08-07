import history from '../history'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import paymentsReducer from './paymentReducer'


const rootReducer = (history) => combineReducers({
    payments: paymentsReducer,
    router: connectRouter(history)
})

export default rootReducer

