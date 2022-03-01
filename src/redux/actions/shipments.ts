import { Dispatch } from 'redux'

import { InterfacePostCreateShipments, InterfacePostShipments } from 'src/assets/tools/interface'

import {
  POST_SHIPMENTS,
  POST_SHIPMENTS_SUCCESS,
  POST_SHIPMENTS_ERROR
} from 'src/redux/types/shipments'

export const POST_SHIPMENTS_ACTIONS = (d: InterfacePostShipments) => async (dispatch: Dispatch): Promise<any> => {
  dispatch({ type: POST_SHIPMENTS })

  try {
    const RESPONSE = await fetch('https://api-demo.skydropx.com/v1/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${process.env.NEXT_PUBLIC_API_KEY}`
      },
      body: JSON.stringify({
        address_from: {
          name: 'Jose Fernando',
          company: 'skydropx',
          address1: 'Av.Principal #234',
          address2: 'Centro',
          city: 'Azcapotzalco',
          province: 'Ciudad de México',
          zip: `${d.address_from.zip}`,
          country: 'MX',
          phone: '5555555555',
          email: 'skydropx@email.com'
        },
        parcels: [
          {
            weight: Number(`${d.parcels[0].weight}`),
            distance_unit: 'CM',
            mass_unit: 'KG',
            height: Number(`${d.parcels[0].height}`),
            width: Number(`${d.parcels[0].width}`),
            length: Number(`${d.parcels[0].length}`)
          }
        ],
        address_to: {
          name: 'Jorge Fernández',
          company: '-',
          address1: 'Av.Lázaro Cárdenas #234',
          address2: 'Americana',
          city: 'Guadalajara',
          province: 'Jalisco',
          zip: `${d.address_to.zip}`,
          country: 'MX',
          phone: '5555555555',
          email: 'ejemplo@skydropx.com'
        },
        consignment_note_class_code: '53131600',
        consignment_note_packaging_code: '1H1'
      })
    })
    const DATA: InterfacePostCreateShipments = await RESPONSE.json()

    return dispatch({
      type: POST_SHIPMENTS_SUCCESS,
      payload: { ...DATA }
    })
  } catch (error: string | any) {
    console.error('ERROR IN POST SHIPMENTS ACTIONS: ', error.message)

    return dispatch({
      type: POST_SHIPMENTS_ERROR,
      payload: error.message
    })
  }
}
