import { WANTED } from './types'

export const searchUser = (user) => {
    return {
        type: WANTED,
        user
    }
}