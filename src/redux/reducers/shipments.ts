import { InterfaceInitialState, InterfacePostCreateShipments } from 'src/assets/tools/interface'

import {
  POST_SHIPMENTS,
  RESET_POST_SHIPMENTS,
  POST_SHIPMENTS_SUCCESS,
  POST_SHIPMENTS_ERROR,
  PostShipmentsActionTypes
} from 'src/redux/types/shipments'

interface InterfaceReducerPostShipments extends InterfaceInitialState {
  postShipments: InterfacePostCreateShipments | any;
}

export const REDUCER_POST_SHIPMENTS = (state: InterfaceReducerPostShipments, action: PostShipmentsActionTypes): InterfaceReducerPostShipments => {
  switch (action.type) {
    case POST_SHIPMENTS:
      return {
        ...state,
        fetching: true
      }
    case RESET_POST_SHIPMENTS:
      return {
        ...state,
        fetching: false,
        postShipments: null
      }
    case POST_SHIPMENTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        postShipments: { ...action.payload }
      }
    case POST_SHIPMENTS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
