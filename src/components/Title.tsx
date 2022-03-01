import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { RESET_POST_LABEL, RESET_GET_LABEL } from 'src/redux/types/label'
import { RESET_POST_SHIPMENTS } from 'src/redux/types/shipments'

import Link from 'next/link'
import { Typography } from '@mui/material'

export const Title: React.FC = () => {
  const ROUTER = useRouter()
  const DISPATCH = useDispatch()
  const HANDLE_CLICK = () => {
    if (ROUTER.pathname === '/') null
    if (ROUTER.pathname === '/services') setTimeout(() => DISPATCH({ type: RESET_POST_SHIPMENTS }), 500)
    if (ROUTER.pathname === '/services/[id]') setTimeout(() => DISPATCH({ type: RESET_POST_SHIPMENTS }), 500)
    if (ROUTER.pathname === '/services/[id]/success') {
      setTimeout(() => {
        DISPATCH({ type: RESET_POST_SHIPMENTS })
        DISPATCH({ type: RESET_POST_LABEL })
        DISPATCH({ type: RESET_GET_LABEL })
      }, 500)
    }
  }

  return (
    <Link href="/" passHref>
      <Typography
        onClick={ () => HANDLE_CLICK() }
        sx={ { cursor: 'pointer' } }
        component="h1"
        variant="h4"
        color="grey.500"
        fontWeight="bold"
        mb="10px"
      >Challenge Skydrops</Typography>
    </Link>
  )
}
