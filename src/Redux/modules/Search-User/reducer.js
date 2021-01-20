import { WANTED } from './types'

const searchUserReducer = (state = '', action) => {
    switch (action.type) {
        case WANTED:
            
            return action.user
    
        default:
            return state
    }
}

export default searchUserReducer