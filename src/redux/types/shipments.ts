import { InterfacePostCreateShipments } from '@tools/interface'

export const POST_SHIPMENTS = 'POST_SHIPMENTS'
export const RESET_POST_SHIPMENTS = 'RESET_POST_SHIPMENTS'
export const POST_SHIPMENTS_SUCCESS = 'POST_SHIPMENTS_SUCCESS'
export const POST_SHIPMENTS_ERROR = 'POST_SHIPMENTS_ERROR'

interface InterfacePostShipmentsActionType {
  type: typeof POST_SHIPMENTS;
}

interface InterfaceRestPostShipmentsActionType {
  type: typeof RESET_POST_SHIPMENTS;
}

interface InterfacePostShipmentsSuccessActionType {
  type: typeof POST_SHIPMENTS_SUCCESS;
  payload: InterfacePostCreateShipments;
}

interface InterfacePostShipmentsErrorActionType {
  type: typeof POST_SHIPMENTS_ERROR;
  payload: string;
}

export type PostShipmentsActionTypes = InterfacePostShipmentsActionType | InterfaceRestPostShipmentsActionType | InterfacePostShipmentsSuccessActionType | InterfacePostShipmentsErrorActionType
