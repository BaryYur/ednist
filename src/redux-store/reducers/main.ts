import produce from 'immer'

// types
import { Action } from 'types'

// actions
import { CHANGE_STATE_PROP } from '../actions'

// themes
import { defaultTheme } from '../../theme'

const REDUCER = 'MAIN'

interface IMainState {

}

const initialState: IMainState = {
  theme: defaultTheme
}

export function mainReducer(state: IMainState = initialState, action: Action) {
  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      if (action.state) {
        const { prop, value } = action.state
        return produce(state, (newState: IMainState) => {
          newState[prop] = value
        })
      }
      return state
    default:
      return state
  }
}