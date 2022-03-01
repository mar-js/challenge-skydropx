import { Dispatch } from 'redux'

import { InterfaceLabel } from 'src/assets/tools/interface'

import {
  POST_LABEL,
  GET_LABEL,
  POST_LABEL_SUCCESS,
  GET_LABEL_SUCCESS,
  POST_LABEL_ERROR,
  GET_LABEL_ERROR
} from 'src/redux/types/label'

export const POST_LABEL_ACTIONS = (rate_id: number) => async (dispatch: Dispatch): Promise<any> => {
  dispatch({ type: POST_LABEL })

  try {
    const RESPONSE_POST = await fetch('https://api-demo.skydropx.com/v1/labels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${process.env.NEXT_PUBLIC_API_KEY}`
      },
      body: JSON.stringify({
        rate_id: Number(`${rate_id}`),
        label_format: 'pdf'
      })
    })
    const DATA_POST: InterfaceLabel = await RESPONSE_POST.json()

    return dispatch({
      type: POST_LABEL_SUCCESS,
      payload: { ...DATA_POST }
    })
  } catch (error: string | any) {
    console.error('ERROR IN POST LABEL ACTIONS: ', error.message)

    return dispatch({
      type: POST_LABEL_ERROR,
      payload: error.message
    })
  }
}

export const GET_LABEL_ACTIONS = (id: string) => async (dispatch: Dispatch): Promise<any> => {
  dispatch({ type: GET_LABEL })

  try {
    const RESPONSE_GET = await fetch(`https://api-demo.skydropx.com/v1/labels/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${process.env.NEXT_PUBLIC_API_KEY}`
      }
    })
    const DATA_GET: InterfaceLabel = await RESPONSE_GET.json()

    return dispatch({
      type: GET_LABEL_SUCCESS,
      payload: { ...DATA_GET }
    })
  } catch (error: string | any) {
    console.error('ERROR IN GET LABEL ACTIONS: ', error.message)

    return dispatch({
      type: GET_LABEL_ERROR,
      payload: error.message
    })
  }
}
