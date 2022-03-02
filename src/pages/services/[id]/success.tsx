import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { InterfaceInitialState, InterfaceLabel } from 'src/assets/tools/interface'
import { RootState } from 'src/redux/reducers/index'
import { GET_LABEL_ACTIONS } from 'src/redux/actions/label'
import { RESET_POST_LABEL } from 'src/redux/types/label'

import Head from 'next/head'
import { Section } from 'src/layouts/Section'
import { LoaderLo } from 'src/components/LoaderLo'
import {
  Box,
  Button,
  Link,
  Skeleton,
  Typography
} from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import WebIcon from '@mui/icons-material/Web'

interface InterfacePostLabelsUseSelector extends InterfaceInitialState {
  postLabel: InterfaceLabel;
}

interface InterfaceGetLabelsUseSelector extends InterfaceInitialState {
  getLabel: InterfaceLabel;
}

const Success: NextPage = () => {
  const { fetching: fetchingPost, postLabel }: InterfacePostLabelsUseSelector = useSelector((state: RootState) => state.statePostLabel)
  const { fetching: fetchingGet, getLabel }: InterfaceGetLabelsUseSelector = useSelector((state: RootState) => state.stateGetLabel)
  const HISTORY = useRouter()
  const DISPATCH = useDispatch()
  const GET_LABEL = (id: string) => DISPATCH(GET_LABEL_ACTIONS(id))
  const HANDLE_CLICK = () => {
    HISTORY.back()

    setTimeout(() => DISPATCH({ type: RESET_POST_LABEL }), 500)
  }

  useEffect(() => {
    if (Object.keys(postLabel || {}).length) GET_LABEL(postLabel.data.id)
  }, [ postLabel ])

  return (
    <>
      <Head>
        <title>Success | Challenge Skydrops</title>
      </Head>
      <Section>
        { fetchingPost || postLabel === undefined ? (
          <LoaderLo />
        ) : postLabel.message || postLabel.data.attributes.status === 'ERROR' ? (
          <>
            <Typography
              variant="h3"
              mb="15px"
              color="red"
            >Hubo un error, por favor vuelve a internarlo</Typography>
            <Typography
              variant="h4"
              mb="15px"
              color="red"
            >El error es: { postLabel.message || postLabel.data.attributes.error_message[0].message }</Typography>
            <Button
              onClick={ () => HANDLE_CLICK() }
              variant="contained"
              color="primary"
            >Volver</Button>
          </>
        ) : (
          <>
            { fetchingGet || getLabel === undefined ? (
              <>
                <Skeleton height={ 100 } animation="wave" />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                  gap="10px"
                >
                  <Skeleton
                    width={ 50 }
                    height={ 40 }
                    animation="wave"
                  />
                  <Skeleton
                    width={ 50 }
                    height={ 40 }
                    animation="wave"
                  />
                </Box>
              </>
            ) : (
              <>
                { getLabel.data.attributes.status === 'ERROR' ? (
                  <>
                    <Typography
                      variant="h3"
                      mb="15px"
                      color="red"
                    >Hubo un error, por favor vuelve a internarlo</Typography>
                    <Typography
                      variant="h4"
                      mb="15px"
                      color="red"
                    >El error es: { getLabel.data.attributes.error_message[0].message }</Typography>
                    <Button
                      onClick={ () => HANDLE_CLICK() }
                      variant="contained"
                      color="primary"
                    >Volver</Button>
                  </>
                ) : (
                  <>
                    <Typography variant="h3" mb="15px">Genial, ahora te queda esperar</Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      flexWrap="wrap"
                      gap="10px"
                      mb="20px"
                    >
                      <Link href={ `${getLabel.data.attributes.label_url}` } target="_blank">
                        <Button variant="outlined">
                    Ver el PDF
                          <PictureAsPdfIcon />
                        </Button>
                      </Link>
                      <Link href={ `${getLabel.data.attributes.tracking_url_provider}` } target="_blank">
                        <Button variant="outlined">
                    Ver el seguimiento del envió
                          <WebIcon />
                        </Button>
                      </Link>
                      <Link href="/" >
                        <Button variant="contained" color="secondary">Crear otro envío</Button>
                      </Link>
                    </Box>
                  </>
                ) }
              </>
            ) }
          </>
        ) }
      </Section>
    </>
  )
}

export default Success
