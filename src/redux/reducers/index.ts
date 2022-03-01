import { combineReducers } from 'redux'

import { REDUCER_POST_SHIPMENTS } from './shipments'
import { REDUCER_POST_LABEL, REDUCER_GET_LABEL } from './label'

export const ROOT_REDUCERS = combineReducers({
  statePostShipments: REDUCER_POST_SHIPMENTS,
  statePostLabel: REDUCER_POST_LABEL,
  stateGetLabel: REDUCER_GET_LABEL
})

export type RootState = ReturnType<typeof ROOT_REDUCERS>
