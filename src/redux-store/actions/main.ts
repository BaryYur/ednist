import { Action } from 'types'

export const CHANGE_STATE_PROP = '_CHANGE_STATE_PROP'

export function changeStateProp(
  prop: string,
  value: any,
  reducer: string = 'data'
): Action {
  return {
    type: reducer.toUpperCase() + CHANGE_STATE_PROP,
    state: {
      prop,
      value
    }
  }
}
