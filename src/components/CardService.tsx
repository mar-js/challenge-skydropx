import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'src/redux/reducers/'
import { POST_LABEL_ACTIONS } from 'src/redux/actions/label'

import {
  InterfaceCardService,
  InterfaceInitialState,
  InterfacePostCreateShipments
} from 'src/assets/tools/interface'

import { LoaderLo } from './LoaderLo'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'

interface InterfacePostShipmentsUseSelector extends InterfaceInitialState {
  postShipments: InterfacePostCreateShipments;
}

export const CardService: React.FC<InterfaceCardService> = ({ idService }) => {
  const HISTORY = useRouter()
  const { fetching, postShipments }: InterfacePostShipmentsUseSelector = useSelector((state: RootState) => state.statePostShipments)
  const GET_SHIPMENT = postShipments && postShipments.included.filter(({ id, attributes }) => id === idService && attributes)
  const DISPATCH = useDispatch()
  const POST_LABEL = (rate_id: number) => DISPATCH(POST_LABEL_ACTIONS(rate_id))
  const HANDLE_CLICK_SI = () => {
    const PATH = HISTORY.asPath
    POST_LABEL(Number(idService))

    HISTORY.push(`${PATH}/success`)
  }
  const HANDLE_CLICK_NO = () => {
    HISTORY.push('/services')
  }

  return (
    <>
      { fetching && !GET_SHIPMENT.length ? (
        <LoaderLo />
      ) : (
        <Card sx={ { padding: '10px' } }>
          <CardContent>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="indigo"
            >{ GET_SHIPMENT[0].attributes.provider }</Typography>
            <Typography variant="h6" color="text.secondary">Días: { GET_SHIPMENT[0].attributes.days }</Typography>
            <Typography variant="h6" color="text.secondary">Precio: ${ Number(GET_SHIPMENT[0].attributes.total_pricing).toFixed() } { GET_SHIPMENT[0].attributes.currency_local }</Typography>
          </CardContent>
          <Typography variant="h5">¿Estás de acuerdo?</Typography>
          <CardActions>
            <Button
              onClick={ HANDLE_CLICK_SI }
              variant="contained"
              color="success"
            >Sí</Button>
            <Button
              onClick={ HANDLE_CLICK_NO }
              variant="contained"
              color="error"
            >No</Button>
          </CardActions>
        </Card>
      ) }
    </>
  )
}
