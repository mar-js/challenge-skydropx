import { InterfaceLabel } from '@tools/interface'

export const POST_LABEL = 'POST_LABEL'
export const RESET_POST_LABEL = 'RESET_POST_LABEL'
export const POST_LABEL_SUCCESS = 'POST_LABEL_SUCCESS'
export const POST_LABEL_ERROR = 'POST_LABEL_ERROR'

export const GET_LABEL = 'GET_LABEL'
export const RESET_GET_LABEL = 'RESET_GET_LABEL'
export const GET_LABEL_SUCCESS = 'GET_LABEL_SUCCESS'
export const GET_LABEL_ERROR = 'GET_LABEL_ERROR'

interface InterfacePostLabelActionType {
  type: typeof POST_LABEL;
}

interface InterfaceRestPostLabelActionType {
  type: typeof RESET_POST_LABEL;
}

interface InterfacePostLabelSuccessActionType {
  type: typeof POST_LABEL_SUCCESS;
  payload: InterfaceLabel;
}

interface InterfacePostLabelErrorActionType {
  type: typeof POST_LABEL_ERROR;
  payload: string;
}

interface InterfaceGetLabelActionType {
  type: typeof GET_LABEL;
}

interface InterfaceRestGetLabelActionType {
  type: typeof RESET_GET_LABEL;
}

interface InterfaceGetLabelSuccessActionType {
  type: typeof GET_LABEL_SUCCESS;
  payload: InterfaceLabel;
}

interface InterfaceGetLabelErrorActionType {
  type: typeof GET_LABEL_ERROR;
  payload: string;
}

export type PostLabelActionTypes = InterfacePostLabelActionType | InterfaceRestPostLabelActionType | InterfacePostLabelSuccessActionType | InterfacePostLabelErrorActionType
export type GetLabelActionTypes = InterfaceGetLabelActionType | InterfaceRestGetLabelActionType | InterfaceGetLabelSuccessActionType | InterfaceGetLabelErrorActionType
