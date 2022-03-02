import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { RootState } from 'src/redux/reducers/'
import { RESET_POST_SHIPMENTS } from 'src/redux/types/shipments'

import {
  InterfaceInitialState,
  InterfacePostCreateShipments,
  InterfaceTableServicesBestOption
} from 'src/assets/tools/interface'

import { LoaderLo } from './LoaderLo'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Link from 'next/link'

import { TableRowCustom } from 'src/assets/styles/tableServicesStyles'

interface InterfacePostShipmentsUseSelector extends InterfaceInitialState {
  postShipments: InterfacePostCreateShipments;
}

export const TableServices: React.FC = () => {
  const { fetching, postShipments }: InterfacePostShipmentsUseSelector = useSelector((state: RootState) => state.statePostShipments)
  const POST_SHIPMENTS = !postShipments ? [] : postShipments.included
  const [ minNumberPrice, setMinNumberPrice ] = useState<number>(0)
  const [ minNumberDay, setMinNumberDay ] = useState<number>(0)
  const [ bestOption, setBestOption ] = useState<InterfaceTableServicesBestOption>({
    days: 0,
    prices: 0
  })
  const [ filterByBestOption, setFilterByBestOption ] = useState<boolean>(false)
  const [ filterByMinPriceOption, setFilterByMinPriceOption ] = useState<boolean>(false)
  const [ filterByMinDayOption, setFilterByMinDayOption ] = useState<boolean>(false)
  const [ selectOption, setSelectOption ] = useState<string>('')
  const HISTORY = useRouter()
  const DISPATCH = useDispatch()
  const HANDLE_CLICK = () => {
    HISTORY.push('/')

    setTimeout(() => DISPATCH({ type: RESET_POST_SHIPMENTS }), 500)
  }

  useEffect(() => {
    if (POST_SHIPMENTS.length) {
      const DAYS: number[] = []
      const PRICES: number[] = []
      const PRICES_DAY_TWO: number[] = []

      POST_SHIPMENTS.forEach(obj => {
        if (obj.type === 'rates') {
          DAYS.push(obj.attributes.days)
          PRICES.push(Number(obj.attributes.total_pricing))

          if (obj.attributes.days === 2) PRICES_DAY_TWO.push(Number(obj.attributes.total_pricing))
        }
      })

      const MIN_NUMBER_DAY = Math.min(...DAYS)
      const MIN_NUMBER_PRICE = Math.min(...PRICES)
      const MIN_PRICES_DAY_TWO = Math.min(...PRICES_DAY_TWO)

      setMinNumberDay(MIN_NUMBER_DAY)
      setMinNumberPrice(MIN_NUMBER_PRICE)
      setBestOption({
        days: MIN_NUMBER_DAY,
        prices: MIN_PRICES_DAY_TWO
      })
    }
  }, [
    POST_SHIPMENTS,
    minNumberPrice,
    minNumberDay
  ])

  const HANDLE_SELECT = (event: SelectChangeEvent) => {
    const VALUE = event.target.value

    setSelectOption(VALUE)

    if (VALUE === 'ver todos') {
      setFilterByBestOption(false)
      setFilterByMinPriceOption(false)
      setFilterByMinDayOption(false)
    }
    if (VALUE === 'ver mejor opción') setFilterByBestOption(!filterByBestOption)

    if (VALUE === 'ver menor día') setFilterByMinDayOption(!filterByMinDayOption)
    if (VALUE === 'ver menor precio') setFilterByMinPriceOption(!filterByMinPriceOption)
  }

  return (
    <>
      { fetching && !POST_SHIPMENTS.length ? (
        <LoaderLo />
      ) : (
        <>
          { POST_SHIPMENTS.length < 3 ? (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              gap="10px"
              mb="15px"
            >
              <Typography
                variant="h5"
                color="red"
                m="20px"
              >Hubo un error, vuelve a intentarlo</Typography>
              <Button
                onClick={ () => HANDLE_CLICK() }
                variant="contained"
                color="secondary"
              >Volver</Button>
            </Box>
          ) : (
            <>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap="10px"
                mb="15px"
                textAlign="center"
              >
                <Button
                  onClick={ () => HANDLE_CLICK() }
                  variant="contained"
                  color="secondary"
                  size="medium"
                >Volver</Button>
                <FormControl sx={ {
                  m: 1,
                  minWidth: 80
                } }
                >
                  <InputLabel id="select-label">Filter</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    label="Filter"
                    value={ selectOption }
                    onChange={ HANDLE_SELECT }
                  >
                    <MenuItem selected value="ver todos"><em>Ver todos</em></MenuItem>
                    <MenuItem disabled={ filterByBestOption || filterByMinDayOption || filterByMinPriceOption } value="ver mejor opción">Ver mejor opción</MenuItem>
                    <MenuItem disabled={ filterByMinDayOption || filterByMinPriceOption || filterByBestOption } value="ver menor día">Ver menor día</MenuItem>
                    <MenuItem disabled={ filterByMinPriceOption || filterByBestOption || filterByMinDayOption } value="ver menor precio">Ver menor precio</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TableContainer component={ Paper }>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Proveedores</TableCell>
                      <TableCell>Demora</TableCell>
                      <TableCell>Precios</TableCell>
                      <TableCell>Monedas</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { POST_SHIPMENTS.map(({
                      id,
                      type,
                      attributes
                    }, i) => (
                      <>
                        { type === 'rates' && (
                          <Link
                            href={ `/services/${id}` }
                            key={ Math.round(Math.random() * Number(id) + i) }
                            passHref
                          >
                            <TableRowCustom>
                              { filterByBestOption ? (
                                <>
                                  { attributes.days === bestOption.days && Number(attributes.total_pricing) === bestOption.prices && (
                                    <>
                                      <TableCell>{ i + 1 - 1 }</TableCell>
                                      <TableCell>{ attributes.provider }</TableCell>
                                      <TableCell>{ attributes.days }</TableCell>
                                      <TableCell>${ Number(attributes.total_pricing).toFixed() }</TableCell>
                                      <TableCell>{ attributes.currency_local }</TableCell>
                                    </>
                                  ) }
                                </>
                              ) : filterByMinPriceOption ? (
                                <>
                                  { Number(attributes.total_pricing) === minNumberPrice && (
                                    <>
                                      <TableCell>{ i + 1 - 1 }</TableCell>
                                      <TableCell>{ attributes.provider }</TableCell>
                                      <TableCell>{ attributes.days }</TableCell>
                                      <TableCell>${ Number(attributes.total_pricing).toFixed() }</TableCell>
                                      <TableCell>{ attributes.currency_local }</TableCell>
                                    </>
                                  ) }
                                </>
                              ) : filterByMinDayOption ? (
                                <>
                                  { attributes.days === minNumberDay && (
                                    <>
                                      <TableCell>{ i + 1 - 1 }</TableCell>
                                      <TableCell>{ attributes.provider }</TableCell>
                                      <TableCell>{ attributes.days }</TableCell>
                                      <TableCell>${ Number(attributes.total_pricing).toFixed() }</TableCell>
                                      <TableCell>{ attributes.currency_local }</TableCell>
                                    </>
                                  ) }
                                </>
                              ) : (
                                <>
                                  <TableCell>{ i + 1 - 1 }</TableCell>
                                  <TableCell>{ attributes.provider }</TableCell>
                                  <TableCell>{ attributes.days }</TableCell>
                                  <TableCell>${ Number(attributes.total_pricing).toFixed() }</TableCell>
                                  <TableCell>{ attributes.currency_local }</TableCell>
                                </>
                              ) }
                            </TableRowCustom>
                          </Link>
                        ) }
                      </>
                    )) }
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) }
        </>
      ) }
    </>
  )
}
