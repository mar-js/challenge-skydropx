import { InterfaceInitialState, InterfaceLabel } from 'src/assets/tools/interface'

import {
  POST_LABEL,
  GET_LABEL,
  RESET_POST_LABEL,
  RESET_GET_LABEL,
  POST_LABEL_SUCCESS,
  GET_LABEL_SUCCESS,
  POST_LABEL_ERROR,
  GET_LABEL_ERROR,
  PostLabelActionTypes,
  GetLabelActionTypes
} from 'src/redux/types/label'

interface InterfaceReducerPostLabel extends InterfaceInitialState {
  postLabel: InterfaceLabel | any;
}

interface InterfaceReducerGetLabel extends InterfaceInitialState {
  getLabel: InterfaceLabel | any;
}

export const REDUCER_POST_LABEL = (state: InterfaceReducerPostLabel, action: PostLabelActionTypes): InterfaceReducerPostLabel => {
  switch (action.type) {
    case POST_LABEL:
      return {
        ...state,
        fetching: true
      }
    case RESET_POST_LABEL:
      return {
        ...state,
        fetching: false,
        postLabel: undefined
      }
    case POST_LABEL_SUCCESS:
      return {
        ...state,
        fetching: false,
        postLabel: { ...action.payload }
      }
    case POST_LABEL_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}

export const REDUCER_GET_LABEL = (state: InterfaceReducerGetLabel, action: GetLabelActionTypes): InterfaceReducerGetLabel => {
  switch (action.type) {
    case GET_LABEL:
      return {
        ...state,
        fetching: true
      }
    case RESET_GET_LABEL:
      return {
        ...state,
        fetching: false,
        getLabel: undefined
      }
    case GET_LABEL_SUCCESS:
      return {
        ...state,
        fetching: false,
        getLabel: { ...action.payload }
      }
    case GET_LABEL_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
