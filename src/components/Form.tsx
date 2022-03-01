import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { InterfacePostShipments } from 'src/assets/tools/interface'

import { POST_SHIPMENTS_ACTIONS } from 'src/redux/actions/shipments'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  TextField
} from '@mui/material'

export const Form: React.FC = () => {
  const ADDRESS_FROM_ZIP = useRef<HTMLInputElement | null>(null)
  const ADDRESS_TO_ZIP = useRef<HTMLInputElement | null>(null)
  const PARCELS_WIDTH = useRef<HTMLInputElement | null>(null)
  const PARCELS_HEIGHT = useRef<HTMLInputElement | null>(null)
  const PARCELS_WEIGHT = useRef<HTMLInputElement | null>(null)
  const PARCELS_LENGTH = useRef<HTMLInputElement | null>(null)
  const HISTORY = useRouter()

  const DISPATCH = useDispatch()
  const POST_SHIPMENTS = (d: InterfacePostShipments) => DISPATCH(POST_SHIPMENTS_ACTIONS(d))

  const HANDLE_SUBMIT = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const D: InterfacePostShipments = {
      address_from: { zip: ADDRESS_FROM_ZIP.current?.value },
      parcels: [
        {
          width: Number(PARCELS_WIDTH.current?.value),
          height: Number(PARCELS_HEIGHT.current?.value),
          weight: Number(PARCELS_WEIGHT.current?.value),
          length: Number(PARCELS_LENGTH.current?.value)
        }
      ],
      address_to: { zip: ADDRESS_TO_ZIP.current?.value }
    }

    POST_SHIPMENTS(D)

    HISTORY.push('/services')
  }

  return (
    <Box
      component="form"
      onSubmit={ HANDLE_SUBMIT }
      sx={ {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '25px'
      } }
    >
      <Card sx={ { border: '1px solid #05c091' } }>
        <CardHeader title="Tú CP" sx={ { color: '#05c091' } } />
        <CardContent>
          <FormControl fullWidth>
            <TextField inputRef={ ADDRESS_FROM_ZIP }
              id="address-from-zip"
              name="address-from-zip"
              margin="normal"
              label="Código Postal"
              inputProps={ {
                inputMode: 'numeric',
                maxLength: '5',
                pattern: '[0-9]*'
              } }
              fullWidth
              autoFocus
              required
            />
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={ { border: '1px solid #4e34e1' } }>
        <CardHeader title="Tamaño del Paquete" sx={ { color: '#4e34e1' } } />
        <CardContent>
          <FormControl fullWidth>
            <TextField inputRef={ PARCELS_WIDTH }
              id="parcels-width"
              name="parcels-width"
              margin="normal"
              label="Ancho"
              inputProps={ {
                inputMode: 'numeric',
                maxLength: '2',
                pattern: '[0-9]*'
              } }
              fullWidth
              autoFocus
              required
            />
            <TextField inputRef={ PARCELS_HEIGHT }
              id="parcels-height"
              name="parcels-height"
              margin="normal"
              label="Alto"
              inputProps={ {
                inputMode: 'numeric',
                maxLength: '2',
                pattern: '[0-9]*'
              } }
              fullWidth
              autoFocus
              required
            />
            <TextField inputRef={ PARCELS_WEIGHT }
              id="parcels-weight"
              name="parcels-weight"
              margin="normal"
              label="Peso"
              inputProps={ {
                inputMode: 'numeric',
                maxLength: '2',
                pattern: '[0-9]*'
              } }
              fullWidth
              autoFocus
              required
            />
            <TextField inputRef={ PARCELS_LENGTH }
              id="parcels-length"
              name="parcels-length"
              margin="normal"
              label="Longitud"
              inputProps={ {
                inputMode: 'numeric',
                maxLength: '2',
                pattern: '[0-9]*'
              } }
              fullWidth
              autoFocus
              required
            />
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={ { border: '1px solid #f06678' } }>
        <CardHeader title="CP de la otra persona" sx={ { color: '#f06678' } } />
        <CardContent>
          <FormControl fullWidth>
            <TextField inputRef={ ADDRESS_TO_ZIP }
              id="address-to-zip"
              name="address-to-zip"
              margin="normal"
              label="Código Postal"
              inputProps={ {
                inputMode: 'numeric',
                maxLength: '5',
                pattern: '[0-9]*'
              } }
              fullWidth
              autoFocus
              required
            />
          </FormControl>
        </CardContent>
      </Card>
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
  )
}
